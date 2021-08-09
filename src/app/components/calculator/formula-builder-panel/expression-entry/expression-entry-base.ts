import { EventEmitter } from '@angular/core';
import { IExpression } from '../../../../interfaces/parser.interface';
import { ExpressionType } from '../../../../models/enums';
export abstract class BaseExpressionEntry {
  onExpressionEntryFocus: EventEmitter<IExpression>;
  onExpressionRemove: EventEmitter<IExpression>;
  onExpressionChange: EventEmitter<IExpression>;

  abstract expression: IExpression;

  fireFocusEvent(exp: IExpression, event: Event = null) {
    if (!exp)
      return;
    if (event) {
      event.stopPropagation();
      event.stopImmediatePropagation();
      event.preventDefault();
      event.cancelBubble = true;
    }

    this.onExpressionEntryFocus.emit(exp);
  }

  deleteExpression(exp: IExpression, event: Event = null) {
    if (!exp)
      return;
    if (event) {
      event.stopPropagation();
      event.stopImmediatePropagation();
      event.preventDefault();
      event.cancelBubble = true;
    }
    this.onExpressionRemove.emit(exp);
    this.onExpressionChange.emit(exp);
  }

  handleExpressionChange(exp: IExpression) {
    if (!exp)
      return;
    this.onExpressionChange.emit(exp);
  }

  constructor() {
    this.onExpressionEntryFocus = new EventEmitter();
    this.onExpressionRemove = new EventEmitter();
    this.onExpressionChange = new EventEmitter();
  }

  get itemTypeString() {
    return ExpressionType[this.expression.type];
  }

}
