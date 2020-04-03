import { browser, element, ElementFinder, by } from 'protractor';
import { HomePage } from '../../framework/page-objects/home.page';

describe('desc', () => {
    it('test', async () => {
        await new HomePage().getInstance();
        // await browser.get('https://www.sbzend.ssls.com');
        for (let i = 0; i < 5; i++) {
            await element(by.css('.ssls-header-add-nav .ssls-btn--sm')).click();
        }
        await browser.close();
    });
});
