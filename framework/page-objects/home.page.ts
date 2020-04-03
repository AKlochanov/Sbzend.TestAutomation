import { browser } from 'protractor';
import { ENVIRONMENT } from '../environment';

export class HomePage {
    async getInstance(): Promise<void> {
        return browser.get(ENVIRONMENT.appUrl, 10000);
    }
}
