import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ExpressionType } from '../../../../models/enums';

@Component({
  selector: 'app-add-expression-menu',
  templateUrl: './add-expression-menu.component.html',
  styleUrls: ['./add-expression-menu.component.css']
})
export class AddExpressionMenuComponent {

  @Output()
  onFormulaReset: EventEmitter<any>;
  @Output()
  onMathItemChoose: EventEmitter<ExpressionType>;

  constructor() {
    this.onFormulaReset = new EventEmitter();
    this.onMathItemChoose = new EventEmitter();
  }

  handleMathItmeChoose(mathItem: ExpressionType) {
    this.onMathItemChoose.emit(mathItem);
  }

  handleFormulaReset() {
    this.onFormulaReset.emit();
  }
}
