import { CostsPage } from './app.po';

describe('costs App', () => {
  let page: CostsPage;

  beforeEach(() => {
    page = new CostsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
