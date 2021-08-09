import { Component, EventEmitter, Input, OnInit, Output, Type, ViewEncapsulation } from '@angular/core';
import { BinaryExpressionOperationType, ExpressionType, UnaryExpressionOperationType } from '../../../../models/enums';
import { IExpression } from '../../../../interfaces/parser.interface';
import { BinaryExpression, ParenthesisExpression } from '../../../../models/expression';
import { SUPPORTED_OPERATIONS_NAMES } from '../../../../models/constants';

@Component({
  selector: 'app-formula-visualizer-recusive-renderer',
  templateUrl: './formula-visualizer-recusive-renderer.component.html',
  styleUrls: ['./formula-visualizer-recusive-renderer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormulaVisualizerRecusiveRendererComponent {

  @Input()
  expression: any;
  @Output()
  onNodeExpressionRemove: EventEmitter<IExpression>;

  constructor() {
    this.expression = null;
    this.onNodeExpressionRemove = new EventEmitter();
  }

  onRemoveExpressionNode(expressionNode: IExpression) {
    this.onNodeExpressionRemove.emit(expressionNode);
  }

  get ExpressionTypes() {
    return ExpressionType;
  }

  get BinaryExpressionOperationTypes() {
    return BinaryExpressionOperationType;
  }

  get expressionAsParenthesised() {
    return this.expression as ParenthesisExpression;
  }

  get UnaryExpressionOperationTypes() {
    return UnaryExpressionOperationType;
  }

  get SUPPORTED_OPERATIONS_NAMES() {
    return SUPPORTED_OPERATIONS_NAMES;
  }
}
