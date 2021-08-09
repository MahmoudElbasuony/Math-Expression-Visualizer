import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IExpression } from '../../../../interfaces/parser.interface';
import { PowerExpression } from '../../../../models/expression';
import { BaseExpressionNodeComponent } from '../base-expression-node.component';

@Component({
  selector: 'app-formula-power',
  templateUrl: './formula-power.component.html',
  styleUrls: ['./formula-power.component.css']
})
export class FormulaPowerComponent extends BaseExpressionNodeComponent {

  @Input()
  expression: PowerExpression;
  @Input()
  public nodeTitle: string;
  @Output()
  public onRemoveNodeExpression: EventEmitter<IExpression>;

  constructor() {
    super();
    this.onRemoveNodeExpression = new EventEmitter();
  }

  onRemoveExpressionNode(expression: IExpression) {
    this.onRemoveNodeExpression.emit(expression);
  }

}
