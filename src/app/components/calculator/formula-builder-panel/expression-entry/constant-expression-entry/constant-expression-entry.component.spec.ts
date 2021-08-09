import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstantExpressionEntryComponent } from './constant-expression-entry.component';

describe('ConstantExpressionEntryComponent', () => {
  let component: ConstantExpressionEntryComponent;
  let fixture: ComponentFixture<ConstantExpressionEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstantExpressionEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstantExpressionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
