interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export class Foto {
  constructor(
    public id: string,
    public width: number,
    public height: number,
    public urls: Urls
  ) {}
}

export class FotoSearchResults {
  constructor(
    public results:   Array<Foto>
  ){}
}
