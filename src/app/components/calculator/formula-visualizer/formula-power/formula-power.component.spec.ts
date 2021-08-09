import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaPowerComponent } from './formula-power.component';

describe('FormulaPowerComponent', () => {
  let component: FormulaPowerComponent;
  let fixture: ComponentFixture<FormulaPowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaPowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
