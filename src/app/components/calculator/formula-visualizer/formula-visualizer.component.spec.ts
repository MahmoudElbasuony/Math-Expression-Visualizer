import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaVisualizerComponent } from './formula-visualizer.component';

describe('FormulaVisualizerComponent', () => {
  let component: FormulaVisualizerComponent;
  let fixture: ComponentFixture<FormulaVisualizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaVisualizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
