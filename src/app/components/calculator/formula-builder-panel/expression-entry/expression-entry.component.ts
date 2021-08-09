import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ExpressionType, BinaryExpressionOperationType } from '../../../../models/enums';
import { SUPPORTED_FUNCTION_NAMES, SUPPORTED_OPERATIONS_NAMES } from '../../../../models/constants';
import { IExpression } from '../../../../interfaces/parser.interface';
import { FunctionExpression, NumberExpression, BinaryExpression, ParenthesisExpression, PIExpression, EIExpression, PowerExpression } from '../../../../models/expression';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-expression-entry',
  templateUrl: './expression-entry.component.html',
  styleUrls: ['./expression-entry.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExpressionEntryComponent {

  @Output()
  onExpressionChanged: EventEmitter<IExpression>;
  @Output()
  onExpressionFocused: EventEmitter<IExpression>;
  @Output()
  onExpressionRemove: EventEmitter<IExpression>;
  @Input()
  initialExpression: IExpression;
  @Input()
  deletable: boolean;

  constructor() {
    this.onExpressionChanged = new EventEmitter();
    this.onExpressionFocused = new EventEmitter();
    this.onExpressionRemove = new EventEmitter();
    this.deletable = true;
  }

  onFocus(expression: IExpression, event: PointerEvent = null) {
    if (event) {
      event.stopPropagation();
    }
    this.onExpressionFocused.emit(expression);
  }

  onDelete(exp: IExpression) {
    if (!exp) return;
    exp.remove();
    this.onExpressionRemove.emit(exp);
  }

  onExpressionChange(exp: IExpression) {
    if (!exp) return;
    this.onExpressionChanged.emit(exp);
  }

  get ExpressionItemType() {
    return ExpressionType;
  }
}
