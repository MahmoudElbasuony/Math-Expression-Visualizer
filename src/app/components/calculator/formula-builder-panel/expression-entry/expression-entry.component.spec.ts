import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionEntryComponent } from './expression-entry.component';

describe('ExpressionEntryComponent', () => {
  let component: ExpressionEntryComponent;
  let fixture: ComponentFixture<ExpressionEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressionEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
