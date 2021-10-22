import { Component, OnInit } from '@angular/core';
import { Foto } from 'src/app/models/foto';
import { UnsplashService } from 'src/app/services/unsplash.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css'],
})
export class FotosComponent implements OnInit {
  public fotos: Array<Foto> = [];

  constructor(private service: UnsplashService) {}

  ngOnInit(): void {
    this.service
      .getFotos()
      .subscribe((resultado) => (this.fotos = resultado.results));
  }

  search(search: string): void {
    console.log('buscando ' + search);
    this.service.getFotos(search).subscribe((resultado) => {
      console.log(resultado);
      this.fotos = resultado.results;
    });
  }
}
