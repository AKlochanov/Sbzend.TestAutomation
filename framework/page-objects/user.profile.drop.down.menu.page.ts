import { element, by, ElementFinder } from 'protractor';

export class UserProfileDropDownMenu {
    private readonly userProfileDialogueSelector: string = 'ul.ssls-header-user-nav';
    private readonly logOutSelector: string = 'button';
    private readonly profileLinkElement: ElementFinder = element(by.css(`a[href='/user/profile']`));

    async clickLogOut(): Promise<void> {
        return element(by.css(this.userProfileDialogueSelector)).element(by.tagName(this.logOutSelector));
    }

    async openUserProfile(): Promise<void> {
        return this.profileLinkElement.click();
    }
}
