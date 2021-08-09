import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathExpressionsComponent } from './math-expressions.component';

describe('MathExpressionComponent', () => {
  let component: MathExpressionsComponent;
  let fixture: ComponentFixture<MathExpressionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathExpressionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathExpressionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
