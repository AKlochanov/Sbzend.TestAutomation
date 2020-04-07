import * as fakeDataGenerator from 'faker';
import { UserProfile } from '../models/user.profile';

export class RandomData {
    static getUser(): UserProfile {
        const user: UserProfile = {};

        user.email = fakeDataGenerator.internet.email();
        user.password = fakeDataGenerator.internet.password();

        return user;
    }
}
