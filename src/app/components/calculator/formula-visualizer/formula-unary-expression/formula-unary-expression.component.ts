import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UnaryExpression } from '../../../../models/expression';
import { UnaryExpressionOperationType } from '../../../../models/enums';
import { SUPPORTED_OPERATIONS_NAMES, SUPPORTED_UNARY_OPERATIONS_NAMES } from '../../../../models/constants';
import { BaseExpressionNodeComponent } from '../base-expression-node.component';
import { IExpression } from '../../../../interfaces/parser.interface';

@Component({
  selector: 'app-formula-unary-expression',
  templateUrl: './formula-unary-expression.component.html',
  styleUrls: ['./formula-unary-expression.component.css']
})
export class FormulaUnaryExpressionComponent extends BaseExpressionNodeComponent {

  @Input()
  expression: UnaryExpression;
  @Input()
  public nodeTitle: string;
  @Output()
  public onRemoveNodeExpression: EventEmitter<IExpression>;

  constructor() {
    super();
    this.onRemoveNodeExpression = new EventEmitter();
  }

  get operation() {
    return SUPPORTED_UNARY_OPERATIONS_NAMES[UnaryExpressionOperationType[this.expression.operation]];
  }
}
