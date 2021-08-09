import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IExpression } from '../../../../../interfaces/parser.interface';
import { PowerExpression, ParenthesisExpression } from '../../../../../models/expression';
import { BaseExpressionEntry } from '../expression-entry-base';

@Component({
  selector: 'app-parenthesised-expression-entry',
  templateUrl: './parenthesised-expression-entry.component.html',
  styleUrls: ['./parenthesised-expression-entry.component.css']
})
export class ParenthesisedExpressionEntryComponent extends BaseExpressionEntry {

  @Input()
  expression: ParenthesisExpression;
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
}
