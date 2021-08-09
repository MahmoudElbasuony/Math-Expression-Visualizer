import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableEntryComponent } from './variable-entry.component';

describe('VariableEntryComponent', () => {
  let component: VariableEntryComponent;
  let fixture: ComponentFixture<VariableEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
