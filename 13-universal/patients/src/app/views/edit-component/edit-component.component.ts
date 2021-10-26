import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css'],
})
export class EditComponentComponent implements OnInit {
  public id: string = '';

  constructor(route: ActivatedRoute) {
    route.params.subscribe((params) => (this.id = params['id']));
  }

  ngOnInit(): void {}
}
