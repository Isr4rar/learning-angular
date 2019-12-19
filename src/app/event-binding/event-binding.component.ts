import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName = 'My button';
  i = 0;
  spinnerMode = 'determinate';
  btnEnable = false;
  spinnerValue = 0;
  selectdOption = 1;

  selectDisabled = false;

  constructor() { }

  ngOnInit() {
  }

  save() {
    console.log('Click');
  }

  inc() {
    this.i++;
    this.buttonName = 'It was clicked ' + this.i + ' times';
  }

  disabled() {
    this.btnEnable = true;
    this.spinnerMode = 'indeterminate';
    setTimeout( () => {
      this.btnEnable = false;
      this.spinnerMode = 'determinate';
    }, 3000);
  }

  addSpinner() {
    this.spinnerValue++;
  }

  cbChange(event) {
    this.selectDisabled = event.checked;
  }

  selectionChange(event) {
    this.selectdOption = event.value;
  }

}
