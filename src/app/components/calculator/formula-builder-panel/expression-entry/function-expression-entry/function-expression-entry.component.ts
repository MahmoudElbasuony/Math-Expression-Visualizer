import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IExpression } from '../../../../../interfaces/parser.interface';
import { FunctionExpression } from '../../../../../models/expression';
import { BaseExpressionEntry } from '../expression-entry-base';
import { SUPPORTED_FUNCTION_NAMES } from '../../../../../models/constants';

@Component({
  selector: 'app-function-expression-entry',
  templateUrl: './function-expression-entry.component.html',
  styleUrls: ['./function-expression-entry.component.css']
})
export class FunctionExpressionEntryComponent extends BaseExpressionEntry {


  @Input()
  expression: FunctionExpression;
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


  get chooseList(): string[] {
    return Object.keys(SUPPORTED_FUNCTION_NAMES);
  }

  onFunctionNameChange(functionName: string = '') {
    this.expression.name = functionName;
    this.onExpressionChange.emit(this.expression);
  }

}
