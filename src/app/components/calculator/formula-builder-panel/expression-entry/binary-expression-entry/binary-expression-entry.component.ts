import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BinaryExpressionOperationType, ExpressionType } from '../../../../../models/enums';
import { BaseExpressionEntry } from '../expression-entry-base';
import { BinaryExpression } from '../../../../../models/expression';
import { SUPPORTED_OPERATIONS_NAMES } from '../../../../../models/constants';
import { IExpression } from '../../../../../interfaces/parser.interface';

@Component({
  selector: 'app-binary-expression-entry',
  templateUrl: './binary-expression-entry.component.html',
  styleUrls: ['./binary-expression-entry.component.css']
})
export class BinaryExpressionEntryComponent extends BaseExpressionEntry {

  @Input()
  expression: BinaryExpression;

  @Output()
  onExpressionEntryFocus: EventEmitter<IExpression>;
  @Output()
  onExpressionRemove: EventEmitter<IExpression>;
  @Output()
  onExpressionChange: EventEmitter<IExpression>;

  constructor() {
    super();
    this.handleExpressionChange(this.expression);
  }

  get BinaryExpressionOperationType() {
    return BinaryExpressionOperationType;
  }

  get chooseList(): string[] {
    return Object.keys(SUPPORTED_OPERATIONS_NAMES).map(key => SUPPORTED_OPERATIONS_NAMES[key]);
  }

  onBinaryOperationChange(operation: string) {
    if (operation === BinaryExpressionOperationType[BinaryExpressionOperationType.UNKNOWN]) {
      this.expression.operation = BinaryExpressionOperationType.UNKNOWN;
    } else {
      const operationStringKey = Object.keys(SUPPORTED_OPERATIONS_NAMES).find(k => SUPPORTED_OPERATIONS_NAMES[k] === operation);

      this.expression.operation = BinaryExpressionOperationType[operationStringKey];
    }
    this.handleExpressionChange(this.expression)
  }
}
