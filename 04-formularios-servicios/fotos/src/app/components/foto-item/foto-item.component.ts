import { Component, Input, OnInit } from '@angular/core';
import { Foto } from 'src/app/models/foto';

@Component({
  selector: 'app-foto-item',
  templateUrl: './foto-item.component.html',
  styleUrls: ['./foto-item.component.css']
})
export class FotoItemComponent implements OnInit {

  @Input() public foto: Foto | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
