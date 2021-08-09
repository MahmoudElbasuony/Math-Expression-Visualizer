import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { DefaultFormulaParser } from './parser/formula-parser';
import { VariableListComponent } from './components/calculator/variable-list/variable-list.component';
import { FormulaVisualizerComponent } from './components/calculator/formula-visualizer/formula-visualizer.component';
import { FormulaBuilderPanelComponent } from './components/calculator/formula-builder-panel/formula-builder-panel.component';
import { FormulaTextDisplayComponent } from './components/calculator/formula-text-display/formula-text-display.component';
import { VariableEntryComponent } from './components/calculator/variable-list/variable-entry/variable-entry.component';
import { FormulaFunctionComponent } from './components/calculator/formula-visualizer/formula-function/formula-function.component';
import { FormulaUnaryExpressionComponent } from './components/calculator/formula-visualizer/formula-unary-expression/formula-unary-expression.component';
import { FormulaBinaryExpressionComponent } from './components/calculator/formula-visualizer/formula-binary-expression/formula-binary-expression.component';
import { FormulaPowerComponent } from './components/calculator/formula-visualizer/formula-power/formula-power.component';
import { FormulaParenthesisedExpressionComponent } from './components/calculator/formula-visualizer/formula-parenthesised-expression/formula-parenthesised-expression.component';
import { FormulaVisualizerRecusiveRendererComponent } from './components/calculator/formula-visualizer/formula-visualizer-recusive-renderer/formula-visualizer-recusive-renderer.component';
import { FormulaExpressionNodeComponent } from './components/calculator/formula-visualizer/formula-expression-node/formula-expression-node.component';
import { AddExpressionMenuComponent } from './components/calculator/formula-builder-panel/add-expression-panel/add-expression-menu.component';
import { MathExpressionsComponent } from './components/calculator/formula-builder-panel/add-expression-panel/math-expressions/math-expressions.component';
import { ExpressionEntryComponent } from './components/calculator/formula-builder-panel/expression-entry/expression-entry.component';
import { ConstantExpressionEntryComponent } from './components/calculator/formula-builder-panel/expression-entry/constant-expression-entry/constant-expression-entry.component';
import { NumberExpressionEntryComponent } from './components/calculator/formula-builder-panel/expression-entry/number-expression-entry/number-expression-entry.component';
import { StringExpressionEntryComponent } from './components/calculator/formula-builder-panel/expression-entry/string-expression-entry/string-expression-entry.component';
import { BinaryExpressionEntryComponent } from './components/calculator/formula-builder-panel/expression-entry/binary-expression-entry/binary-expression-entry.component';
import { UnaryExpressionEntryComponent } from './components/calculator/formula-builder-panel/expression-entry/unary-expression-entry/unary-expression-entry.component';
import { ParenthesisedExpressionEntryComponent } from './components/calculator/formula-builder-panel/expression-entry/parenthesised-expression-entry/parenthesised-expression-entry.component';
import { PowerExpressionEntryComponent } from './components/calculator/formula-builder-panel/expression-entry/power-expression-entry/power-expression-entry.component';
import { ParameterExpressionEntryComponent } from './components/calculator/formula-builder-panel/expression-entry/parameter-expression-entry/parameter-expression-entry.component';
import { FunctionExpressionEntryComponent } from './components/calculator/formula-builder-panel/expression-entry/function-expression-entry/function-expression-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    VariableListComponent,
    FormulaVisualizerComponent,
    FormulaBuilderPanelComponent,
    FormulaTextDisplayComponent,
    VariableEntryComponent,
    FormulaFunctionComponent,
    FormulaUnaryExpressionComponent,
    FormulaBinaryExpressionComponent,
    FormulaPowerComponent,
    FormulaParenthesisedExpressionComponent,
    FormulaVisualizerRecusiveRendererComponent,
    FormulaExpressionNodeComponent,
    AddExpressionMenuComponent,
    MathExpressionsComponent,
    ExpressionEntryComponent,
    ConstantExpressionEntryComponent,
    NumberExpressionEntryComponent,
    StringExpressionEntryComponent,
    BinaryExpressionEntryComponent,
    UnaryExpressionEntryComponent,
    ParenthesisedExpressionEntryComponent,
    PowerExpressionEntryComponent,
    ParameterExpressionEntryComponent,
    FunctionExpressionEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: 'IFormulaParser', useClass: DefaultFormulaParser }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
