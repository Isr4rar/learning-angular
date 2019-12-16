import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  person = {
    name: 'Israel Araujo',
    age: 22,
    address: {
      cep: '58052-140',
      numero: '425'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
