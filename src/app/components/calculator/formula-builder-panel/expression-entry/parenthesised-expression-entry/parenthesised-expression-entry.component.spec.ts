import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenthesisedExpressionEntryComponent } from './parenthesised-expression-entry.component';

describe('ParenthesisedExpressionEntryComponent', () => {
  let component: ParenthesisedExpressionEntryComponent;
  let fixture: ComponentFixture<ParenthesisedExpressionEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParenthesisedExpressionEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParenthesisedExpressionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
