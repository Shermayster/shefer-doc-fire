import { SheferClientFirebasePage } from './app.po';

describe('shefer-client-firebase App', () => {
  let page: SheferClientFirebasePage;

  beforeEach(() => {
    page = new SheferClientFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
