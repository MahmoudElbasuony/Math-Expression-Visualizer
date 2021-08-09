import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaBuilderPanelComponent } from './formula-builder-panel.component';

describe('FormulaBuilderPanelComponent', () => {
  let component: FormulaBuilderPanelComponent;
  let fixture: ComponentFixture<FormulaBuilderPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaBuilderPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaBuilderPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
