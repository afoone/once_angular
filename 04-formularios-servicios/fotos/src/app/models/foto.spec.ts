import { Foto } from './foto';

describe('Fotos', () => {
  it('should create an instance', () => {
    expect(
      new Foto('a', 23, 323, {
        raw: 'klsdfj',
        regular: 'kdsfjñ',
        full: 'lsdkjaf',
        small: '',
        thumb: '',
      })
    ).toBeTruthy();
  });
});
