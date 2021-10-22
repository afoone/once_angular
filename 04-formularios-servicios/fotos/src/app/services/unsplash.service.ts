import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FotoSearchResults } from '../models/foto';

@Injectable({ providedIn: 'root' })
export class UnsplashService {
  constructor(private httpClient: HttpClient) {}

  public getFotos(search: string = "bikini"): Observable<any> {
    return this.httpClient.get<FotoSearchResults>(
      `https://api.unsplash.com/search/photos/?query=${search}&client_id=329f86e44507992fd941bdd8aed65d16e52360b9d94115645b8583311f1ce8eb&access_key=329f86e44507992fd941bdd8aed65d16e52360b9d94115645b8583311f1ce8eb`
    );
  }
}
