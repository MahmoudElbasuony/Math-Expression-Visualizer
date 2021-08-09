import { ExpressionType, BinaryExpressionOperationType, UnaryExpressionOperationType } from './enums';
import { SUPPORTED_OPERATIONS_NAMES, SUPPORTED_UNARY_OPERATIONS_NAMES } from './constants';
import { IExpression } from '../interfaces/parser.interface';


export abstract class Expression<T> implements IExpression {
  protected _value: T;
  type: ExpressionType;
  protected _parent: IExpression;
  private _isActive: boolean;
  constructor(type: ExpressionType) {
    this.type = type;
    this._parent = null;
    this._isActive = false;
  }
  get parent() {
    return this._parent;
  }
  set parent(exp: IExpression) {
    this._parent = exp;
  }

  get isActive() {
    return this._isActive;
  }
  set isActive(isactive: boolean) {
    this._isActive = isactive;
  }
  isAbsoulteNode(): boolean {
    return (this.type === ExpressionType.E ||
      this.type === ExpressionType.PI ||
      this.type === ExpressionType.NUMBER ||
      this.type === ExpressionType.PARAMETER ||
      this.type === ExpressionType.STRING);
  }
  isRoot() {
    return !this._parent;
  }
  remove() {
    if (this.isRoot())
      return;
    for (const prop in this._parent) {
      if ((this._parent[prop] instanceof Array)) {
        const list: IExpression[] = this._parent[prop];
        if (!list || !list.length)
          return;
        const matchIndx = list.findIndex(e => e === this);
        if (matchIndx >= 0) {
          list[matchIndx].parent = null;
          list.splice(matchIndx, 1);
        }
        break;
      }
      else if (this._parent[prop] === this) {
        const temp = this._parent[prop];
        this._parent[prop] = null;
        temp.parent = null;
        break;
      }
    }
  }
  toString() {
    return '';
  }
  value(): T {
    return this._value;
  }
}


export class NumberExpression extends Expression<number> {
  constructor(value: number) {
    super(ExpressionType.NUMBER);
    this._value = value || 0;
  }
  toString() {
    return this.value().toString();
  }

  setValue(val: number) {
    this._value = val;
  }
}


export class StringExpression extends Expression<string> {

  constructor(value: string) {
    super(ExpressionType.STRING);
    this._value = value;
  }
  toString() {
    return `"${this.value()}"`;
  }
}

export class PIExpression extends Expression<number> {
  constructor() {
    super(ExpressionType.PI);
    this._value = Math.PI;
  }
  toString() {
    return 'PI';
  }
}


export class EIExpression extends Expression<number> {
  constructor() {
    super(ExpressionType.E);
    this._value = Math.E;
  }
  toString() {
    return 'E';
  }
}


export class PowerExpression extends Expression<number> {

  private _expression: IExpression;
  private _power: IExpression;
  constructor(expression: IExpression, power: IExpression) {
    super(ExpressionType.POWER);
    this._expression = expression;
    if (this._expression)
      this._expression.parent = this;
    this._power = power;
    if (this._power)
      this._power.parent = this;
  }

  value(): number {
    return Math.pow(this._expression.value(), this._power.value());
  }

  toString() {
    return `${(this._expression || '').toString()} ^ ${(this._power || '').toString()}`;
  }

  set power(power: IExpression) {
    if (!power)
      throw new Error('power expression required');
    this._power = power;
    if (this._power)
      this._power.parent = this;
  }
  set expression(baseExpr: IExpression) {
    if (!baseExpr)
      throw new Error('base expression required');
    this._expression = baseExpr;
    if (this._expression)
      this._expression.parent = this;
  }
  get power() {
    return this._power;
  }
  get expression() {
    return this._expression;
  }
}

export class FunctionExpression extends Expression<number> {
  private _name: string;
  private _arguments: IExpression[];
  constructor(name: string, args: IExpression[] = []) {
    super(ExpressionType.FUNCTION);
    this._name = name;
    this._arguments = args;
    this._arguments.forEach(arg => {
      arg.parent = this;
    });
  }

  value(): number {
    return null; // calculate function output here
  }

  toString() {
    return `${(this._name || '')}( ${this._arguments.map(arg => (arg || '').toString()).join(' , ')} )`;
  }

  addArgumentExpression(argExpr: IExpression) {
    if (!argExpr)
      throw new Error('expression required');
    argExpr.parent = this;
    this._arguments.push(argExpr);
  }

  get arguments() {
    return this._arguments;
  }

  set name(val) {
    if (!val || !val.trim())
      throw new Error('name is required');
    this._name = val;
  }
  get name() {
    return this._name;
  }
}

export class ParameterExpression extends Expression<number | string> {
  private _name: string;
  constructor(name: string, value: string | number) {
    super(ExpressionType.PARAMETER);
    this._name = name;
    this._value = value;
  }
  setValue(val: string | number): void {
    this._value = val;
  }
  toString() {
    return this._name;
  }
  set name(name: string) {
    if (!name || !name.trim())
      throw new Error('name is required');
    this._name = name;
  }
  get name() {
    return this._name;
  }

}


export class UnaryExpression extends Expression<number> {
  operation: UnaryExpressionOperationType;
  private _expression: IExpression;
  constructor(operation: UnaryExpressionOperationType, expression: IExpression) {
    super(ExpressionType.UNARY_EXPR);
    this._expression = expression;
    if (this._expression)
      this._expression.parent = this;
    this.operation = operation;
  }
  value(): number {
    return null; // calculate unary value
  }
  toString() {
    const operationStr = SUPPORTED_UNARY_OPERATIONS_NAMES[UnaryExpressionOperationType[this.operation]];
    return `${(operationStr || '')}${(this._expression || '').toString()}`;
  }
  set expression(exp: IExpression) {
    if (!exp)
      throw new Error('expression required');
    this._expression = exp;
    if (this._expression)
      this._expression.parent = this;
  }
  get expression() {
    return this._expression;
  }
}


export class BinaryExpression extends Expression<number> {
  operation: BinaryExpressionOperationType;
  private _left: IExpression;
  private _right: IExpression;
  constructor(left: IExpression, right: IExpression, operation: BinaryExpressionOperationType) {
    super(ExpressionType.BINARY_EXPR);
    this._left = left;
    if (this._left)
      this._left.parent = this;
    this._right = right;
    if (this._right)
      this._right.parent = this;
    this.operation = operation;
  }
  value(): number {
    return null; // calculate value
  }
  toString() {
    const operationStr = SUPPORTED_OPERATIONS_NAMES[BinaryExpressionOperationType[this.operation]];
    return `${(this._left || '').toString()} ${(operationStr || '')} ${(this._right || '').toString()}`;
  }
  set left(exp: IExpression) {
    if (!exp)
      throw new Error('expression required');
    this._left = exp;
    if (this._left)
      this._left.parent = this;
  }
  get left() {
    return this._left;
  }
  get right() {
    return this._right;
  }
  set right(exp: IExpression) {
    if (!exp)
      throw new Error('expression required');
    this._right = exp;
    if (this._right)
      this._right.parent = this;
  }
}


export class ParenthesisExpression extends Expression<number> {
  private _expression: IExpression;
  constructor(expression: IExpression) {
    super(ExpressionType.PARENTHESIS_EXP);
    this._expression = expression;
    if (this._expression)
      this._expression.parent = this;
  }
  value(): number {
    return null; // calculate
  }
  toString() {
    return `( ${(this._expression || '').toString()} )`;
  }
  set expression(exp: IExpression) {
    if (!exp)
      throw new Error('expression required');
    this._expression = exp;
    if (this._expression)
      this._expression.parent = this;
  }
  get expression() {
    return this._expression;
  }

}
