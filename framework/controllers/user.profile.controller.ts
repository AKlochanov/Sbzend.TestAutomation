import { UserProfileFieldName } from '../enums/user.profile.field.name';
import { IPoUserProfile } from '../interfaces/po/po.user.profile.interface';
import { UserProfile } from '../models/user.profile';
import { UserProfilePage } from '../page-objects/user.profile.page';

const userProfilePage = new UserProfilePage();

export class UserProfileController {
    static async getUserProfile(): Promise<UserProfile> {
        console.log('Get user profile...');
        const userProfile: UserProfile = {};

        const poUserProfileDataArray: IPoUserProfile[] = await userProfilePage.getUserProfile();

        for (const data of poUserProfileDataArray) {
            if (data.field === UserProfileFieldName.Newsletter) {
                userProfile.isNewsletterSelected = data.text as boolean;
            } else {
                const objectKey = this.getEnumKey(UserProfileFieldName, data.field);
                userProfile[objectKey] = data.text;
            }
        }

        return userProfile;
    }

    private static getEnumKey(object: object, value: string): string {
        const objectKey: string = Object.keys(object).find((key) => object[key] === value);

        if (objectKey === undefined) {
            console.log(object);
            throw Error(`getEnumKey: the object above does not have the following ${value} value`);
        }

        return objectKey;
    }
}
