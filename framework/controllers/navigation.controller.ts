import { IAuthorizationDialogue } from '../interfaces/authorization.dialogue.interface';
import { UserProfile } from '../models/user.profile';
import { AuthorizationPage } from '../page-objects/authorization.page';
import { HomePage } from '../page-objects/home.page';
import { NavigationPage } from '../page-objects/navigation.page';
import { UserProfileDropDownMenu } from '../page-objects/user.profile.drop.down.menu.page';
import { SnackBarController } from './snackbar.controller';
import { browser } from 'protractor';

const homePage = new HomePage();
const navigationPage = new NavigationPage();
const authorizationPage = new AuthorizationPage();
const userProfileDropDownMenu = new UserProfileDropDownMenu();

export class NavigationController {
    static async login(user: UserProfile, isValidationRequired = false): Promise<IAuthorizationDialogue> {
        console.log(`Login to app as ${user.email}`);

        const dialogue: IAuthorizationDialogue = {};

        await homePage.getInstance();
        await navigationPage.goToLoginPage();

        if (user.email) {
            await authorizationPage.setEmail(user.email);
        }

        if (user.password) {
            await authorizationPage.setPassword(user.password);
        }

        await authorizationPage.clickLoginButton();

        if (isValidationRequired) {
            dialogue.snackBarMessage = await SnackBarController.getSnackbarText();
        }

        return dialogue;
    }

    static async logout(): Promise<void> {
        console.log(`Log out...`);
        await navigationPage.openUserDropDown();
        await userProfileDropDownMenu.clickLogOut();
        return browser.waitForAngular();
    }

    static async goToUserProfile(): Promise<void> {
        console.log(`Open a user profile...`);
        await navigationPage.openUserDropDown();
        await userProfileDropDownMenu.openUserProfile();
    }

    static async isUserLoggedIn(user: UserProfile) {
        const userEmail: string = (await navigationPage.getProfileText()).toLocaleLowerCase();

        if (userEmail === user.email) {
            return true;
        } else {
            return false;
        }
    }
}
