import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerExpressionEntryComponent } from './power-expression-entry.component';

describe('PowerExpressionEntryComponent', () => {
  let component: PowerExpressionEntryComponent;
  let fixture: ComponentFixture<PowerExpressionEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerExpressionEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerExpressionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
