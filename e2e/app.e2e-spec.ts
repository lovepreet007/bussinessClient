import { BusinessappclientPage } from './app.po';

describe('businessappclient App', () => {
  let page: BusinessappclientPage;

  beforeEach(() => {
    page = new BusinessappclientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
