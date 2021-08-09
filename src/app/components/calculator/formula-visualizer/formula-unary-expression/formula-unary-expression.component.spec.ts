import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaUnaryExpressionComponent } from './formula-unary-expression.component';

describe('FormulaUnaryExpressionComponent', () => {
  let component: FormulaUnaryExpressionComponent;
  let fixture: ComponentFixture<FormulaUnaryExpressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaUnaryExpressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaUnaryExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
