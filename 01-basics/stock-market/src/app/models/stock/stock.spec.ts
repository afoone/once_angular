import { Stock } from './stock';

describe('Stock', () => {
  it('should create an instance', () => {
    expect(new Stock("Telefónica", "TEL", 4.56, 2.34)).toBeTruthy();
  });
});
