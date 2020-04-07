import { element, by, ElementFinder } from 'protractor';

export class UserProfileDropDownMenu {
    private readonly userProfileDialogueSelector: string = 'ul.ssls-header-user-nav';
    private readonly logOutElement: ElementFinder = element(by.css(`${this.userProfileDialogueSelector} button`));
    private readonly profileLinkElement: ElementFinder = element(by.css(`a[href='/user/profile']`));

    async clickLogOut(): Promise<void> {
        return this.logOutElement.click();
    }

    async openUserProfile(): Promise<void> {
        return this.profileLinkElement.click();
    }
}
