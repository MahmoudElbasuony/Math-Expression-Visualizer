import { ExpressionType, BinaryExpressionOperationType, UnaryExpressionOperationType } from '../models/enums';
import {
  FunctionExpression, PowerExpression,
  BinaryExpression, PIExpression,
  ParenthesisExpression, NumberExpression,
  ParameterExpression, EIExpression,
  StringExpression, UnaryExpression
} from '../models/expression';
import * as Lexer from '../../assets/lexer.js';
import { IExpression } from '../interfaces/parser.interface';


export interface IFormulaParser {
  parse(formulaText: string): Promise<any>;
}

export class DefaultFormulaParser implements IFormulaParser {

  parse(formulaText: string): Promise<IExpression> {
    return new Promise((resolve, reject) => {
      try {
        const lexicalTree = Lexer.getLexicalTree(formulaText);
        const ast = this._buildExpressionTreeFromLexcialTree(lexicalTree);
        if (ast)
          resolve(ast);
        else
          reject('No expression to represent');
      } catch (e) {
        reject(e.message);
      }
    });
  }

  private _buildExpressionTreeFromLexcialTree(rootNode: any): IExpression {
    if (!rootNode) return null;
    const astRootExpression = this.getExpressionFromNode(rootNode);
    return astRootExpression;
  }

  private getExpressionTypeFromNode({ type } = { type: '' }): ExpressionType {
    switch (type) {
      case 'NEGATION':
        return ExpressionType.UNARY_EXPR;
      case 'PAREN':
        return ExpressionType.PARENTHESIS_EXP;
      case 'NUMBER':
        return ExpressionType.NUMBER;
      case 'PI':
        return ExpressionType.PI;
      case 'E':
        return ExpressionType.E;
      case 'VARIABLE':
        return ExpressionType.PARAMETER;
      case 'FUNCTION':
        return ExpressionType.FUNCTION;
      case 'POWER':
        return ExpressionType.POWER;
      case 'DIVISION':
      case 'MULTIPLICATION':
      case 'SUBTRACTION':
      case 'ADDITION':
        return ExpressionType.BINARY_EXPR;
      default:
        return ExpressionType.UNKNOWN;
    }
  }

  private getBinaryOperationTypeFromNode({ type } = { type: '' }): BinaryExpressionOperationType {
    switch (type) {
      case 'DIVISION':
        return BinaryExpressionOperationType.DIVISION;
      case 'MULTIPLICATION':
        return BinaryExpressionOperationType.MULTIPLICATION;
      case 'SUBTRACTION':
        return BinaryExpressionOperationType.SUBTRACTION;
      case 'ADDITION':
        return BinaryExpressionOperationType.ADDITION;
      default:
        return BinaryExpressionOperationType.UNKNOWN;
    }
    return BinaryExpressionOperationType[type];
  }

  private getUnaryOperationTypeFromNode({ type } = { type: '' }): UnaryExpressionOperationType {
    switch (type) {
      case 'NEGATION':
        return UnaryExpressionOperationType.NEGATION;
      default:
        return UnaryExpressionOperationType.UNKNOWN;
    }
    return BinaryExpressionOperationType[type];
  }

  private getExpressionFromNode(node): IExpression {
    const expressionType = this.getExpressionTypeFromNode(node);
    switch (expressionType) {
      case ExpressionType.BINARY_EXPR:
        return this._buildBinaryExpressionFromNode(node);
      case ExpressionType.UNARY_EXPR:
        return this._buildUnaryExpressionFromNode(node);
      case ExpressionType.FUNCTION:
        return this._buildFunctionExpressionFromNode(node);
      case ExpressionType.POWER:
        return this._buildPowerExpressionFromNode(node);
      case ExpressionType.PARENTHESIS_EXP:
        return new ParenthesisExpression(this.getExpressionFromNode(node.expression));
      case ExpressionType.NUMBER:
        return new NumberExpression(node.value);
      case ExpressionType.PARAMETER:
        return new ParameterExpression(node.name, null /** get value from given map */);
      case ExpressionType.STRING:
        return new StringExpression(node.value);
      case ExpressionType.E:
        return new EIExpression();
      case ExpressionType.PI:
        return new PIExpression();
      default:
        return null;
    }
  }

  private _buildBinaryExpressionFromNode(node) {
    if (!node)
      return null;
    const leftExpression = this.getExpressionFromNode(node.left);
    const rightExpression = this.getExpressionFromNode(node.right);
    const operation = this.getBinaryOperationTypeFromNode(node);
    return new BinaryExpression(leftExpression, rightExpression, operation);
  }

  private _buildUnaryExpressionFromNode(node) {
    if (!node)
      return null;
    const operation = this.getUnaryOperationTypeFromNode(node);
    const unaryExpression = this.getExpressionFromNode(node.expression);
    return new UnaryExpression(operation, unaryExpression);
  }

  private _buildFunctionExpressionFromNode(node) {
    if (!node)
      return null;
    const argsExpressions = [];
    const nodeArgs = node.arguments || [];
    nodeArgs.forEach(arg => {
      argsExpressions.push(this.getExpressionFromNode(arg));
    });
    return new FunctionExpression(node.name, argsExpressions);
  }

  private _buildPowerExpressionFromNode(node) {
    if (!node) return null;
    const expression = this.getExpressionFromNode(node.expression);
    const powerExpression = this.getExpressionFromNode(node.power);
    return new PowerExpression(expression, powerExpression);
  }
}




