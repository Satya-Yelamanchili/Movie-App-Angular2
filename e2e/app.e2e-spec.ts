import { MovieAppAngular2Page } from './app.po';

describe('movie-app-angular2 App', () => {
  let page: MovieAppAngular2Page;

  beforeEach(() => {
    page = new MovieAppAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
