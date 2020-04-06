import { User } from '../models/user';
import * as fakeDataGenerator from 'faker';

export class RandomData {
    static getUser(): User {
        const user: User = {};

        user.email = fakeDataGenerator.internet.email();
        user.password = fakeDataGenerator.internet.password();

        return user;
    }
}
