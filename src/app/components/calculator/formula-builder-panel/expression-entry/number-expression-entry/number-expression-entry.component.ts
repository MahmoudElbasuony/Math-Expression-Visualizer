import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IExpression } from '../../../../../interfaces/parser.interface';
import { PowerExpression, NumberExpression } from '../../../../../models/expression';
import { BaseExpressionEntry } from '../expression-entry-base';

@Component({
  selector: 'app-number-expression-entry',
  templateUrl: './number-expression-entry.component.html',
  styleUrls: ['./number-expression-entry.component.css']
})
export class NumberExpressionEntryComponent extends BaseExpressionEntry {


  @Input()
  expression: NumberExpression;
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

  handleNumberChange(number: number) {
    this.expression.setValue(number);
    this.handleExpressionChange(this.expression);
  }
}
