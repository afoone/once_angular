import { Component, OnInit } from '@angular/core';
import { Test } from '../models/test';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css'],
})
export class ElementsComponent implements OnInit {
  public elements: Array<Test>;

  constructor() {
    this.elements = [
      {
        title: 'hola',
      },
      {
        title: 'adios',
      },
      {
        title: 'perla',
      },
      {
        title: 'hola',
      },
      {
        title: 'adios',
      },
      {
        title: 'perla',
      },
    ];
  }

  ngOnInit(): void {}

  removeElement() {
    this.elements.pop();
  }
}
