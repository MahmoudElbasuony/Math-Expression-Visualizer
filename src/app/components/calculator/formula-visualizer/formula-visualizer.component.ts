import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IExpression } from '../../../interfaces/parser.interface';

@Component({
  selector: 'app-formula-visualizer',
  templateUrl: './formula-visualizer.component.html',
  styleUrls: ['./formula-visualizer.component.css']
})
export class FormulaVisualizerComponent {

  @Input()
  rootExpression: IExpression;
  @Output()
  onExpressionNodeRemove: EventEmitter<IExpression>;

  constructor() {
    this.rootExpression = null;
    this.onExpressionNodeRemove = new EventEmitter();
  }

  onRemoveExpressionNode(expression: IExpression) {
    this.onExpressionNodeRemove.emit(expression);
  }
}
