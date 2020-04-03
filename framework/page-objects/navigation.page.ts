import { ElementFinder, element, by, browser } from 'protractor';

export class NavigationPage {
    private readonly loginButtonElement: ElementFinder = element(by.css('.ssls-header-add-nav .ssls-btn--sm'));

    async clickLoginButton(): Promise<void> {
        return this.loginButtonElement.click();
    }
}
