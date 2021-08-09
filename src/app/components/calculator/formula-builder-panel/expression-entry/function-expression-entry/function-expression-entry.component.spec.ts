import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionExpressionEntryComponent } from './function-expression-entry.component';

describe('FunctionExpressionEntryComponent', () => {
  let component: FunctionExpressionEntryComponent;
  let fixture: ComponentFixture<FunctionExpressionEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionExpressionEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionExpressionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
