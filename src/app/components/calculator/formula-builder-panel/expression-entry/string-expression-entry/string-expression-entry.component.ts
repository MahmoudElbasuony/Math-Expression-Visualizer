import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IExpression } from '../../../../../interfaces/parser.interface';
import { PowerExpression, StringExpression } from '../../../../../models/expression';
import { BaseExpressionEntry } from '../expression-entry-base';

@Component({
  selector: 'app-string-expression-entry',
  templateUrl: './string-expression-entry.component.html',
  styleUrls: ['./string-expression-entry.component.css']
})
export class StringExpressionEntryComponent extends BaseExpressionEntry {

  @Input()
  expression: StringExpression;
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
