import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterExpressionEntryComponent } from './parameter-expression-entry.component';

describe('ParameterExpressionEntryComponent', () => {
  let component: ParameterExpressionEntryComponent;
  let fixture: ComponentFixture<ParameterExpressionEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParameterExpressionEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterExpressionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
