import { Quotes } from './quotes';

describe('Quotes', () => {
  it('should create an instance', () => {
    expect(new Quotes(2,'','',new Date(2016,2,2)));
  });
});
