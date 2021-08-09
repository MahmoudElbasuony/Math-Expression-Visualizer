import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-variable-list',
  templateUrl: './variable-list.component.html',
  styleUrls: ['./variable-list.component.css']
})
export class VariableListComponent implements OnInit {

  @Output()
  onParameterListChange: EventEmitter<string[][]>;
  @Input()
  parameterList: string[][];
  newParameter: string[];
  constructor() {
    this.onParameterListChange = new EventEmitter();
    this.parameterList = [];
    this.newParameter = null;
  }

  ngOnInit() {
  }

  removeParameter(key) {
    const matchIndex = this.parameterList.findIndex(e => e[0] === key);
    if (matchIndex >= 0) {
      this.parameterList.splice(matchIndex, 1);
      this.parameterList = [...this.parameterList];
      this.onParameterListChange.emit(this.parameterList);
    }
  }

  addParameter() {
    const emptyMatchIndx = this.parameterList.findIndex(e => !e[0]);
    if (emptyMatchIndx >= 0)
      this.newParameter = this.parameterList[emptyMatchIndx];
    else {
      this.newParameter = [];
      this.parameterList.push(this.newParameter);
      this.onParameterListChange.emit(this.parameterList);
    }
  }

}
