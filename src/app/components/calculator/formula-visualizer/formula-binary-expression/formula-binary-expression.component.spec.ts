import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaBinaryExpressionComponent } from './formula-binary-expression.component';

describe('FormulaBinaryExpressionComponent', () => {
  let component: FormulaBinaryExpressionComponent;
  let fixture: ComponentFixture<FormulaBinaryExpressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaBinaryExpressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaBinaryExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
