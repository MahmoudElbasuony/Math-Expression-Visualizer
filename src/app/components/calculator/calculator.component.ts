import { Component, DoCheck, Inject, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { DefaultFormulaParser } from '../../parser/formula-parser';
import { IExpression } from '../../interfaces/parser.interface';
import { ParenthesisExpression } from '../../models/expression';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  error: string;
  rootExpression: ParenthesisExpression;
  parameterList: string[][];
  constructor(@Inject('IFormulaParser') private _parser: DefaultFormulaParser) {
    this.error = '';
    this.parameterList = [];
  }

  ngOnInit(): void {
    this._buildEmptyStartExpression();
  }

  _buildEmptyStartExpression() {
    this.rootExpression = new ParenthesisExpression(null);
    this.rootExpression.isActive = true;
    this.checkASTExpressionTree();
  }

  async checkASTExpressionTree() {
    try {
      this.error = '';
      if (!this.rootExpression)
        return Promise.resolve();
      const astExpressionTree = await this._parser.parse(this.rootExpression.toString());
      console.log(astExpressionTree);
    } catch (e) {
      console.log(e);
      if (this.rootExpression.expression)
        this.error = e;
    }
  }

  onFormulaChange() {
    this.checkASTExpressionTree();
  }

  async handleExpressionNodeRemove(expression: IExpression) {
    if (!expression)
      return;

    if (!expression.isRoot()) {
      expression.remove();
    }

    if (this.rootExpression) {
      this.cleanUp();
    }

    this.checkASTExpressionTree();
  }

  onParameterListChange(parameterList: string[][] = []) {
    this.parameterList = parameterList;
  }

  cleanUp() {
    this._buildEmptyStartExpression();
    this.error = '';
    this.parameterList = [];
  }

}

