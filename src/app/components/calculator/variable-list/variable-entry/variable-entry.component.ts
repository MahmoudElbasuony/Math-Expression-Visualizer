import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-variable-entry',
  templateUrl: './variable-entry.component.html',
  styleUrls: ['./variable-entry.component.css']
})
export class VariableEntryComponent implements OnInit {

  @Input()
  parameter: string[];
  @Input()
  hasFocus: boolean;
  @Output()
  onParameterRemove: EventEmitter<string>;

  constructor() {
    this.onParameterRemove = new EventEmitter<string>();
    this.parameter = [];
    this.hasFocus = true;
  }

  ngOnInit() {
  }

  onHoverParameter() {
    this.hasFocus = true;
  }
  onBlurParameter() {
    this.hasFocus = false;
  }

  removeEntry() {
    this.onParameterRemove.emit(this.parameter[0]);
  }

  get isInvalid() {
    return !this.parameter[0];
  }
}
