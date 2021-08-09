import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberExpressionEntryComponent } from './number-expression-entry.component';

describe('NumberExpressionEntryComponent', () => {
  let component: NumberExpressionEntryComponent;
  let fixture: ComponentFixture<NumberExpressionEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberExpressionEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberExpressionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
