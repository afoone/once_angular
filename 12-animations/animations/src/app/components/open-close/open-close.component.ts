import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],

  // The transition() function accepts two arguments: the first argument accepts
  // an expression that defines the direction between two transition states,
  //and the second argument accepts one or a series of animate() steps.
  animations: [
    // las animaciones van aquí
    // An animation requires a trigger, so that it knows when to start.
    // The trigger() function collects the states and transitions, and gives
    // the animation a name, so that you can attach
    // it to the triggering element in the HTML template.
    trigger('open-close', [
      // transition('open => closed', [animate('1s')]),
      // transition('closed => open', [animate('0.2s')]),

      // también con wildcards
      // transition('* => closed', [animate('1s')]),
      // transition('* => open', [animate('0.2s')]),

      // puede ser bidireccional
      transition('open<=>closed', [animate('0.5s')]),
      state(
        'open',
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'yellow',
        })
      ),
      state(
        'closed',
        style({
          height: '100px',
          opacity: 0.8,
          backgroundColor: 'blue',
        })
      ),
    ]),
  ],
})
export class OpenCloseComponent implements OnInit {
  public show: boolean;

  constructor() {
    this.show = false;
  }

  toggle() {
    this.show = !this.show;
  }
  ngOnInit(): void {}


}
