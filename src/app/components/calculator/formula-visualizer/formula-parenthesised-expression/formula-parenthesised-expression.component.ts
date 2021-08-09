import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ParenthesisExpression } from '../../../../models/expression';
import { BaseExpressionNodeComponent } from '../base-expression-node.component';
import { IExpression } from '../../../../interfaces/parser.interface';

@Component({
  selector: 'app-formula-parenthesised-expression',
  templateUrl: './formula-parenthesised-expression.component.html',
  styleUrls: ['./formula-parenthesised-expression.component.css']
})
export class FormulaParenthesisedExpressionComponent extends BaseExpressionNodeComponent {

  @Input()
  expression: ParenthesisExpression;
  @Input()
  public nodeTitle: string;
  @Output()
  public onRemoveNodeExpression: EventEmitter<IExpression>;

  constructor() {
    super();
    this.onRemoveNodeExpression = new EventEmitter();
  }

  onRemoveExpressionNode(expression: IExpression) {
    this.onRemoveNodeExpression.emit(expression);
  }

}
