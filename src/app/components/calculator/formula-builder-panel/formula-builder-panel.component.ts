import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { BinaryExpressionOperationType, ExpressionType, UnaryExpressionOperationType } from '../../../models/enums';
import { IExpression } from '../../../interfaces/parser.interface';
import { FunctionExpression, NumberExpression, BinaryExpression, ParenthesisExpression, PIExpression, EIExpression, PowerExpression, ParameterExpression, UnaryExpression } from '../../../models/expression';

@Component({
  selector: 'app-formula-builder-panel',
  templateUrl: './formula-builder-panel.component.html',
  styleUrls: ['./formula-builder-panel.component.css']
})
export class FormulaBuilderPanelComponent implements OnInit, OnChanges {


  @Output()
  onFormulaChange: EventEmitter<IExpression>;
  @Output()
  onFormulaReset: EventEmitter<any>;
  error: string;
  currentMathItemType: ExpressionType;
  @Input()
  rootExpression: ParenthesisExpression;
  currentFocusedExpression: IExpression;

  constructor() {
    this.onFormulaChange = new EventEmitter();
    this.onFormulaReset = new EventEmitter();
    this.currentMathItemType = ExpressionType.PARENTHESIS_EXP;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.rootExpression.currentValue !== changes.rootExpression.previousValue) {
      this.rootExpression = this.currentFocusedExpression = changes.rootExpression.currentValue;
      this.focusExpression(this.rootExpression);
    }
  }

  ngOnInit(): void {
    this.onFormulaChangeHandler();
    this.currentFocusedExpression = this.rootExpression;
    this.currentFocusedExpression.isActive = true;
  }

  onFormulaChangeHandler() {
    this.onFormulaChange.emit(this.rootExpression);
  }

  handleMathItemChoose(mathItem: ExpressionType) {
    this.currentMathItemType = mathItem;
    const newExpression = this._buildEmptyExpression(this.currentFocusedExpression);
    let isNewExpressionAttached = false;
    console.log(newExpression);
    if (this.currentFocusedExpression === this.rootExpression) {
      const parenthsisedExpression = this.rootExpression as ParenthesisExpression;
      parenthsisedExpression.expression = newExpression;
      this.focusExpression(newExpression);
      isNewExpressionAttached = true;
    } else {
      isNewExpressionAttached = this.attachNewExpressionToCurrentFocusedExpression(newExpression);
    }
    this.onFormulaChangeHandler();
  }

  focusExpression(expression: IExpression) {
    if (!expression)
      return;
    if (this.currentFocusedExpression)
      this.currentFocusedExpression.isActive = false;
    this.currentFocusedExpression = expression;
    this.currentFocusedExpression.isActive = true;
  }

  handleOnFocus(exp: IExpression) {
    if (!exp)
      return;
    this.focusExpression(exp);
    console.log(exp);
  }

  handleExpressionRemove(exp: IExpression) {
    if (!exp) return;
    if (exp === this.rootExpression) {
      this.rootExpression.expression = null;
      this.focusExpression(this.rootExpression);
    } else {
      this.focusExpression(exp.parent);
      exp.remove();
    }
    this.onFormulaChange.emit(exp);
  }

  handleFormulaReset() {
    this.error = '';
    this.currentMathItemType = ExpressionType.PARENTHESIS_EXP;
    this.focusExpression(this.currentFocusedExpression);
    this.onFormulaReset.emit();
  }

  attachNewExpressionToCurrentFocusedExpression(expression: IExpression): boolean {
    let isNewExpressionAttached = false;
    if (!expression || !this.currentFocusedExpression)
      return isNewExpressionAttached;
    switch (this.currentFocusedExpression.type) {
      case ExpressionType.FUNCTION:
        const funcExpression = this.currentFocusedExpression as FunctionExpression;
        funcExpression.addArgumentExpression(expression);
        isNewExpressionAttached = true;
        this.focusExpression(expression);
        break;
      case ExpressionType.NUMBER:
      case ExpressionType.PI:
      case ExpressionType.E:
        isNewExpressionAttached = false;
        alert('You can not attach to numbers , strings , constants or parameters expressions');
        break;
      case ExpressionType.BINARY_EXPR:
        const binaryExpression = this.currentFocusedExpression as BinaryExpression;
        if (!binaryExpression.left) {
          binaryExpression.left = expression;
          isNewExpressionAttached = true;
          this.focusExpression(binaryExpression);
        } else if (binaryExpression.operation === BinaryExpressionOperationType.UNKNOWN) {
          alert('please enter the operation first');
          isNewExpressionAttached = false;
        } else if (!binaryExpression.right) {
          binaryExpression.right = expression;
          this.focusExpression(expression);
          isNewExpressionAttached = true;
        }
        break;
      case ExpressionType.PARENTHESIS_EXP:
        const parenthesisedExpression = this.currentFocusedExpression as ParenthesisExpression;
        parenthesisedExpression.expression = expression;
        this.focusExpression(expression);
        isNewExpressionAttached = true;
        break;
      case ExpressionType.UNARY_EXPR:
        const unaryExpression = this.currentFocusedExpression as UnaryExpression;
        unaryExpression.expression = expression;
        this.focusExpression(expression);
        isNewExpressionAttached = true;
        break;
      case ExpressionType.POWER:
        const powerExpression = this.currentFocusedExpression as PowerExpression;
        if (!powerExpression.expression) {
          powerExpression.expression = expression;
          this.focusExpression(powerExpression);
          isNewExpressionAttached = true;
        } else if (!powerExpression.power) {
          powerExpression.power = expression;
          this.focusExpression(powerExpression.power);
          isNewExpressionAttached = true;
        }
        break;
      default:
        isNewExpressionAttached = false;
        break;
    }

    return isNewExpressionAttached;
  }

  get isConstantExpression() {
    return this.currentMathItemType === ExpressionType.E || this.currentMathItemType === ExpressionType.PI;
  }
  get isNumberExpression() {
    return this.currentMathItemType === ExpressionType.NUMBER;
  }
  get isStringExpression() {
    return this.currentMathItemType === ExpressionType.STRING;
  }
  isExpressionAllowNesting(expression: IExpression) {
    return expression && !this.isConstantExpression && !this.isNumberExpression && !this.isStringExpression;
  }

  get ExpressionItemType() {
    return ExpressionType;
  }


  private _buildEmptyExpression(parent: IExpression = null): IExpression {
    let expression: IExpression = null;
    switch (this.currentMathItemType) {
      case ExpressionType.FUNCTION:
        expression = new FunctionExpression('');
        break;
      case ExpressionType.NUMBER:
        expression = new NumberExpression(undefined);
        break;
      case ExpressionType.PARAMETER:
        expression = new ParameterExpression(null, null);
        break;
      case ExpressionType.BINARY_EXPR:
        expression = new BinaryExpression(null, null, BinaryExpressionOperationType.UNKNOWN);
        break;
      case ExpressionType.UNARY_EXPR:
        expression = new UnaryExpression(UnaryExpressionOperationType.UNKNOWN, null);
        break;
      case ExpressionType.PARENTHESIS_EXP:
        expression = new ParenthesisExpression(null);
        break;
      case ExpressionType.POWER:
        expression = new PowerExpression(null, null);
        break;
      case ExpressionType.PI:
        expression = new PIExpression();
        break;
      case ExpressionType.E:
        expression = new EIExpression();
        break;
      default:
        expression = null;
        break;
    }

    return expression;
  }

}
