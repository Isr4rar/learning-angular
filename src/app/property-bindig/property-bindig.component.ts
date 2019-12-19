import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-bindig',
  templateUrl: './property-bindig.component.html',
  styleUrls: ['./property-bindig.component.css']
})
export class PropertyBindigComponent implements OnInit {

  color = 'primary';
  btnDisabled = true;
  colors = ['primary', 'accent', 'warn', ''];
  idx = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.idx = (this.idx+1) % this.colors.length;
    }, 1000)
  }

}
