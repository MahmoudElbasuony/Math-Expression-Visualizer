import { EventEmitter, Input, Output } from '@angular/core';
import { IExpression } from '../../../interfaces/parser.interface';
export abstract class BaseExpressionNodeComponent {

  public abstract nodeTitle: string;
  public abstract onRemoveNodeExpression: EventEmitter<IExpression>;
  id: number;
  collapsed: boolean;
  isNodeHovered: boolean;
  abstract expression: IExpression;

  constructor() {
    this.id = Date.now();
    this.collapsed = true;
    this.isNodeHovered = false;
  }

  get nodeId() {
    return `ep_${this.id}`;
  }

  get value() {
    return this.expression.value();
  }

  removeExpressionNode() {
    this.onRemoveNodeExpression.emit(this.expression);
  }
}
