import { ElementFinder, by, element } from 'protractor';

export class LoginPage {
    private readonly emailInputElement: ElementFinder = element(by.css(`input[name='email']`));
    private readonly passwordInputElement: ElementFinder = element(by.css(`input[name='password']`));
    private readonly loginButtonElement: ElementFinder = element(by.css(`button[type='submit']`));

    async setEmail(value: string): Promise<void> {
        await this.emailInputElement.clear();
        return this.emailInputElement.sendKeys(value);
    }

    async setPassword(value: string): Promise<void> {
        await this.passwordInputElement.clear();
        return this.passwordInputElement.sendKeys(value);
    }

    async clickLoginButton(): Promise<void> {
        return this.loginButtonElement.click();
    }
}
