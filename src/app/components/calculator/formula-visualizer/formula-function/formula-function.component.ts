import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FunctionExpression } from '../../../../models/expression';
import { BaseExpressionNodeComponent } from '../base-expression-node.component';
import { IExpression } from '../../../../interfaces/parser.interface';

@Component({
  selector: 'app-formula-function',
  templateUrl: './formula-function.component.html',
  styleUrls: ['./formula-function.component.css']
})
export class FormulaFunctionComponent extends BaseExpressionNodeComponent {

  @Input()
  expression: FunctionExpression;
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
