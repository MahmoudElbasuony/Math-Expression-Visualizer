import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UnaryExpressionOperationType } from '../../../../../models/enums';
import { BaseExpressionEntry } from '../expression-entry-base';
import { UnaryExpression } from '../../../../../models/expression';
import { SUPPORTED_UNARY_OPERATIONS_NAMES } from '../../../../../models/constants';
import { IExpression } from '../../../../../interfaces/parser.interface';

@Component({
  selector: 'app-unary-expression-entry',
  templateUrl: './unary-expression-entry.component.html',
  styleUrls: ['./unary-expression-entry.component.css']
})
export class UnaryExpressionEntryComponent extends BaseExpressionEntry {

  @Input()
  expression: UnaryExpression;
  @Output()
  onExpressionChange: EventEmitter<IExpression>;
  @Output()
  onExpressionEntryFocus: EventEmitter<IExpression>;
  @Output()
  onExpressionRemove: EventEmitter<IExpression>;

  constructor() {
    super();
    this.handleExpressionChange(this.expression);
  }

  get UnaryExpressionOperationType() {
    return UnaryExpressionOperationType;
  }

  get chooseList(): string[] {
    return Object.keys(SUPPORTED_UNARY_OPERATIONS_NAMES).map(key => SUPPORTED_UNARY_OPERATIONS_NAMES[key]);
  }

  onUnaryOperationChange(operation: string) {

    if (operation === UnaryExpressionOperationType[UnaryExpressionOperationType.UNKNOWN]) {
      this.expression.operation = UnaryExpressionOperationType.UNKNOWN;
    } else {
      const operationStringKey = Object.keys(SUPPORTED_UNARY_OPERATIONS_NAMES).find(k => SUPPORTED_UNARY_OPERATIONS_NAMES[k] === operation);
      this.expression.operation = UnaryExpressionOperationType[operationStringKey];
    }
    this.handleExpressionChange(this.expression);
  }
}
