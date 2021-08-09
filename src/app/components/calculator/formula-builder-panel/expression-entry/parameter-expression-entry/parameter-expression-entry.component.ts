import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IExpression } from '../../../../../interfaces/parser.interface';
import { PowerExpression, ParameterExpression } from '../../../../../models/expression';
import { BaseExpressionEntry } from '../expression-entry-base';

@Component({
  selector: 'app-parameter-expression-entry',
  templateUrl: './parameter-expression-entry.component.html',
  styleUrls: ['./parameter-expression-entry.component.css']
})
export class ParameterExpressionEntryComponent extends BaseExpressionEntry {


  @Input()
  expression: ParameterExpression;
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

  onParameterNameChange(name: string) {
    this.expression.name = `$${name}`;
    this.handleExpressionChange(this.expression);
  }

}
