import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaVisualizerRecusiveRendererComponent } from './formula-visualizer-recusive-renderer.component';

describe('FormulaVisualizerRecusiveRendererComponent', () => {
  let component: FormulaVisualizerRecusiveRendererComponent;
  let fixture: ComponentFixture<FormulaVisualizerRecusiveRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaVisualizerRecusiveRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaVisualizerRecusiveRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
