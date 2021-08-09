import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaTextDisplayComponent } from './formula-text-display.component';

describe('FormulaTextDisplayComponent', () => {
  let component: FormulaTextDisplayComponent;
  let fixture: ComponentFixture<FormulaTextDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaTextDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaTextDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
