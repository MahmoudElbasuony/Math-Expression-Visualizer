import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IExpression } from '../../../../interfaces/parser.interface';
import { BaseExpressionNodeComponent } from '../base-expression-node.component';
@Component({
  selector: 'app-formula-expression-node',
  templateUrl: './formula-expression-node.component.html',
  styleUrls: ['./formula-expression-node.component.css']
})
export class FormulaExpressionNodeComponent extends BaseExpressionNodeComponent {

  @Input()
  expression: IExpression;

  @Input()
  public nodeTitle: string;
  @Output()
  public onRemoveNodeExpression: EventEmitter<IExpression>;

  constructor() {
    super();
    this.onRemoveNodeExpression = new EventEmitter();
  }

  onHoverNode(event: MouseEvent) {
    this.isNodeHovered = true;
    event.stopPropagation();
  }

  onLeaveNode(event: MouseEvent) {
    this.isNodeHovered = false;
    event.stopPropagation();
  }
}
