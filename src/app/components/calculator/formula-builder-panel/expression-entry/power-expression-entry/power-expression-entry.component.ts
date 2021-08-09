import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseExpressionEntry } from '../expression-entry-base';
import { IExpression } from '../../../../../interfaces/parser.interface';
import { PowerExpression } from '../../../../../models/expression';

@Component({
  selector: 'app-power-expression-entry',
  templateUrl: './power-expression-entry.component.html',
  styleUrls: ['./power-expression-entry.component.css']
})
export class PowerExpressionEntryComponent extends BaseExpressionEntry {

  @Input()
  expression: PowerExpression;
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
