import { NavigationController } from '../../framework/controllers/navigation.controller';
import { RandomData } from '../../framework/data-provider/random.data';
import { ENVIRONMENT } from '../../framework/environment';
import { IAuthorizationDialogue } from '../../framework/interfaces/authorization.dialogue.interface';
import { User } from '../../framework/models/user';
import * as CONSTANTS from '../../framework/data-provider/constants';

const registeredUser: User = {
    email: 'ssls.automation+666@gmail.com',
    password: ENVIRONMENT.defaultPassword,
};

const notRegisteredUser: User = RandomData.getUser();

describe('authorization', () => {
    it('authorization page, not registered user', async () => {
        const actualDialogue: IAuthorizationDialogue = await NavigationController.login(notRegisteredUser, true);

        expect(actualDialogue.snackBarMessage).toEqual(CONSTANTS.SNACK_BAR_MESSAGE.incorrectCredentials);
    });

    it('Authorization page, registered user', async () => {
        await NavigationController.login(registeredUser);

        expect(await NavigationController.isUserLoggedIn(registeredUser)).toBeTruthy();

        await NavigationController.logout();
    });
});
