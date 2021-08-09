import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaParenthesisedExpressionComponent } from './formula-parenthesised-expression.component';

describe('FormulaParenthesisedExpressionComponent', () => {
  let component: FormulaParenthesisedExpressionComponent;
  let fixture: ComponentFixture<FormulaParenthesisedExpressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaParenthesisedExpressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaParenthesisedExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
