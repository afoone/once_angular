import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public search: string = '';

  @Output() public setSearch: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  buscar() {
    this.setSearch.emit(this.search);
  }
}
