import { NavigationController } from '../../framework/controllers/navigation.controller';
import { UserProfile } from '../../framework/models/user.profile';
import { ENVIRONMENT } from '../../framework/environment';
import { UserProfileController } from '../../framework/controllers/user.profile.controller';

const registeredUser: UserProfile = {
    email: 'ssls.automation+666@gmail.com',
    password: ENVIRONMENT.defaultPassword,
};

let expectedUserProfile: UserProfile = {};

describe('My profile page', () => {
    beforeAll(async () => {
        await NavigationController.login(registeredUser);
        await NavigationController.goToUserProfile();
        expectedUserProfile = await UserProfileController.getUserProfile();
        await NavigationController.logout();
    });

    afterEach(async () => {
        await NavigationController.logout();
    });

    it('get user profile, view mode', async () => {
        await NavigationController.login(registeredUser);
        await NavigationController.goToUserProfile();

        const actualUserProfile = await UserProfileController.getUserProfile();

        expect(actualUserProfile).toEqual(expectedUserProfile);
    });
});
