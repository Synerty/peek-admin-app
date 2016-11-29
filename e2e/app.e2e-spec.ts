import { PeekServerFePage } from './app.po';

describe('peek-server-fe App', function() {
  let page: PeekServerFePage;

  beforeEach(() => {
    page = new PeekServerFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
