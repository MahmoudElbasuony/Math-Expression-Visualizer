import { Component, EventEmitter, Output } from '@angular/core';
import { ExpressionType } from '../../../../../models/enums';

@Component({
  selector: 'app-math-expressions',
  templateUrl: './math-expressions.component.html',
  styleUrls: ['./math-expressions.component.css']
})
export class MathExpressionsComponent {

  @Output()
  onMathItemChoose: EventEmitter<ExpressionType>;

  constructor() {
    this.onMathItemChoose = new EventEmitter();
  }

  chooseMathItem(itemType: ExpressionType) {
    this.onMathItemChoose.emit(itemType);
  }

  get MathItemType() {
    return ExpressionType;
  }
}
