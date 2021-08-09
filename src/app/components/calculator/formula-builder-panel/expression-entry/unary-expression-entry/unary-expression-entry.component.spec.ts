import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnaryExpressionEntryComponent } from './unary-expression-entry.component';

describe('UnaryExpressionEntryComponent', () => {
  let component: UnaryExpressionEntryComponent;
  let fixture: ComponentFixture<UnaryExpressionEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnaryExpressionEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnaryExpressionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
