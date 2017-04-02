import { PokesirPage } from './app.po';

describe('pokesir App', () => {
  let page: PokesirPage;

  beforeEach(() => {
    page = new PokesirPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
