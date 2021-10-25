import { Component, OnInit } from '@angular/core';
import { transition, trigger, animate } from '@angular/animations';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css'],
})
export class PopoverComponent implements OnInit {
  private show: boolean;

  constructor() {
    this.show = false;
  }

  ngOnInit(): void {}

  get stateName() {
    return this.show ? 'show' : 'hide';
  }

  toggle() {
    this.show = !this.show;
  }
}
