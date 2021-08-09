import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaExpressionNodeComponent } from './formula-expression-node.component';

describe('FormulaExpressionNodeComponent', () => {
  let component: FormulaExpressionNodeComponent;
  let fixture: ComponentFixture<FormulaExpressionNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaExpressionNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaExpressionNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
