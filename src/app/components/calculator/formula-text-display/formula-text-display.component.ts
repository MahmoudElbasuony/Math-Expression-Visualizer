import { Component, Input, OnInit } from '@angular/core';
import { IExpression } from '../../../interfaces/parser.interface';

@Component({
  selector: 'app-formula-text-display',
  templateUrl: './formula-text-display.component.html',
  styleUrls: ['./formula-text-display.component.css']
})
export class FormulaTextDisplayComponent implements OnInit {

  @Input()
  expressionStr: string;
  constructor() {
    this.expressionStr = '';
  }

  ngOnInit() {
  }

}
