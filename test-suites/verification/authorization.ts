import { NavigationController } from '../../framework/controllers/navigation.controller';
import * as CONSTANTS from '../../framework/data-provider/constants';
import { RandomData } from '../../framework/data-provider/random.data';
import { ENVIRONMENT } from '../../framework/environment';
import { IAuthorizationDialogue } from '../../framework/interfaces/authorization.dialogue.interface';
import { UserProfile } from '../../framework/models/user.profile';

const registeredUser: UserProfile = {
    email: 'ssls.automation+666@gmail.com',
    password: ENVIRONMENT.defaultPassword,
};

const notRegisteredUser: UserProfile = RandomData.getUser();

describe('authorization', () => {
    it('authorization page, not registered user', async () => {
        const actualDialogue: IAuthorizationDialogue = await NavigationController.login(notRegisteredUser, true);

        expect(actualDialogue.snackBarMessage).toEqual(CONSTANTS.SNACK_BAR_MESSAGE.incorrectCredentials);
    });

    it('authorization page, registered user', async () => {
        await NavigationController.login(registeredUser);

        expect(await NavigationController.isUserLoggedIn(registeredUser)).toBeTruthy();

        await NavigationController.logout();
    });
});
