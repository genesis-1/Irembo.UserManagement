// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { AppPage } from './app.po';

describe('Irembo.UserManagement App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display application title: Irembo.UserManagement', async () => {
    await page.navigateTo();
    expect(await page.getAppTitle()).toEqual('Irembo.UserManagement');
  });
});
