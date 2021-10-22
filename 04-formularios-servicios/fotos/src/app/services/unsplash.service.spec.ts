import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UnsplashService } from './unsplash.service';

describe('UnsplashService', () => {
  let service: UnsplashService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(UnsplashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('retrieve fotos', () => {
    service.getFotos('hola').subscribe((fotos) => {
      console.log('FOTOS', fotos);
      expect(fotos).toBeFalse();
      expect(fotos.results.length).toBeGreaterThan(0)
    });
  });
});
