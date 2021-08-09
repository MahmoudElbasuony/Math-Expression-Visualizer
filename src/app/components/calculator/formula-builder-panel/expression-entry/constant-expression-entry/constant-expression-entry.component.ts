import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';
import { IExpression } from '../../../../../interfaces/parser.interface';
import { PowerExpression } from '../../../../../models/expression';
import { BaseExpressionEntry } from '../expression-entry-base';

@Component({
  selector: 'app-constant-expression-entry',
  templateUrl: './constant-expression-entry.component.html',
  styleUrls: ['./constant-expression-entry.component.css']
})
export class ConstantExpressionEntryComponent extends BaseExpressionEntry implements OnInit {
  @Input()
  expression: IExpression;
  @Output()
  onExpressionEntryFocus: EventEmitter<IExpression>;
  @Output()
  onExpressionRemove: EventEmitter<IExpression>;
  @Output()
  onExpressionChange: EventEmitter<IExpression>;
  constructor() {
    super();
  }
  ngOnInit(): void {
    this.handleExpressionChange(this.expression);
  }
}
