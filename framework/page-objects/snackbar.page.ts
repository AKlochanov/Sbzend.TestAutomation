import { ElementFinder, element, by } from 'protractor';
export class SnackBarPage {
    private readonly snackBarElement: ElementFinder = element(by.css(`div[id^='noty_']`));

    async getSnackBarMessage(): Promise<void> {
        this.snackBarElement.getText();
    }
}
