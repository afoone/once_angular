import { Component } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lifecycle';
  public visible = true;

  cambiaTitulo = () => {
    this.title = 'otro titulo ' + uuid();
  };

  toggleVisible = () => {
    this.visible = !this.visible;
  };
}
