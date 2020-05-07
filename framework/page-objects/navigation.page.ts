import { by, element, ElementFinder } from 'protractor';

export class NavigationPage {
    private readonly loginButtonElement: ElementFinder = element(by.css('.ssls-header-add-nav button.ssls-btn--sm span'));
    private readonly userProfileButtonElement: ElementFinder = element(by.css('.ssls-header-user'));

    async goToLoginPage(): Promise<void> {
        return this.loginButtonElement.click();
    }

    async getProfileText(): Promise<string> {
        return this.userProfileButtonElement.getText();
    }

    async openUserDropDown(): Promise<void> {
        await this.userProfileButtonElement.click();
    }
}
