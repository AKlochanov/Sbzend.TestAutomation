import { browser } from 'protractor';
import { ENVIRONMENT } from '../environment';
import { SnackBarPage } from '../page-objects/snackbar.page';

const snackbarPage = new SnackBarPage();

export class SnackBarController {
    static async getSnackbarText(snackbarVisibilityTimeout: number = ENVIRONMENT.defaultTimeout): Promise<string> {
        await browser.waitForAngularEnabled(false);

        let snackBarText = '';
        let waitingInterval = 0;
        const waitingIntervalDelta = 50;

        while (true) {
            try {
                snackBarText = await snackbarPage.getSnackBarMessage();
                if (snackBarText !== '') {
                    break;
                }
            } catch (error) {}

            await browser.sleep(waitingIntervalDelta);
            waitingInterval += waitingIntervalDelta;
            if (waitingInterval > snackbarVisibilityTimeout) {
                break;
            }
        }

        await browser.waitForAngularEnabled(true);

        console.log(`Snackbar text: ${snackBarText}`);
        return snackBarText;
    }
}
