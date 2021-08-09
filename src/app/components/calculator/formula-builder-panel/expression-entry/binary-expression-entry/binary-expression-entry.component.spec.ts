import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryExpressionEntryComponent } from './binary-expression-entry.component';

describe('BinaryExpressionEntryComponent', () => {
  let component: BinaryExpressionEntryComponent;
  let fixture: ComponentFixture<BinaryExpressionEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinaryExpressionEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinaryExpressionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
