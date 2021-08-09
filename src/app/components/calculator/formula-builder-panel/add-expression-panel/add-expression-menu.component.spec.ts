import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpressionMenuComponent } from './add-expression-menu.component';

describe('AddExpressionPanelComponent', () => {
  let component: AddExpressionMenuComponent;
  let fixture: ComponentFixture<AddExpressionMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExpressionMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpressionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
