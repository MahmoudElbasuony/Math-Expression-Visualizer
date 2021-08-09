import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringExpressionEntryComponent } from './string-expression-entry.component';

describe('StringExpressionEntryComponent', () => {
  let component: StringExpressionEntryComponent;
  let fixture: ComponentFixture<StringExpressionEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringExpressionEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringExpressionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
