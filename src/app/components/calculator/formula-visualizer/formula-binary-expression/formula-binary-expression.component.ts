import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { BinaryExpression } from '../../../../models/expression';
import { SUPPORTED_OPERATIONS_NAMES } from '../../../../models/constants';
import { BinaryExpressionOperationType } from '../../../../models/enums';
import { BaseExpressionNodeComponent } from '../base-expression-node.component';
import { IExpression } from '../../../../interfaces/parser.interface';

@Component({
  selector: 'app-formula-binary-expression',
  templateUrl: './formula-binary-expression.component.html',
  styleUrls: ['./formula-binary-expression.component.css']
})
export class FormulaBinaryExpressionComponent extends BaseExpressionNodeComponent {

  @Input()
  expression: BinaryExpression;
  @Input()
  public nodeTitle: string;
  @Output()
  public onRemoveNodeExpression: EventEmitter<IExpression>;

  constructor() {
    super();
    this.onRemoveNodeExpression = new EventEmitter();
  }

  get operation() {
    return SUPPORTED_OPERATIONS_NAMES[BinaryExpressionOperationType[this.expression.operation]];
  }

  onRemoveExpressionNode(expression: IExpression) {
    this.onRemoveNodeExpression.emit(expression);
  }

}
