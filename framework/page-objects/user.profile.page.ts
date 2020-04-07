import { by, element, ElementFinder } from 'protractor';
import { UserProfileFieldName } from '../enums/user.profile.field.name';
import { IPoUserProfile } from '../interfaces/po/po.user.profile.interface';

export class UserProfilePage {
    private readonly rowSelector: string = 'div.item';
    private readonly fieldNameSelector: string = 'div.terms';
    private readonly fieldTextSelector: string = 'div.description';
    private readonly newsLetterToggleSelector: string = 'input[name^=newsletter]';

    async getUserProfile(): Promise<IPoUserProfile[]> {
        const UserProfile: IPoUserProfile[] = [];

        const rows: ElementFinder[] = await element.all(by.css(this.rowSelector)).asElementFinders_();
        for (const row of rows) {
            const profileData: IPoUserProfile = {};

            profileData.field = await this.getFiledName(row);

            if (profileData.field === UserProfileFieldName.Newsletter) {
                profileData.text = await this.isNewsLetterToggleSelected(row);
            } else {
                profileData.text = await this.getFieldText(row);
            }

            UserProfile.push(profileData);
        }

        return UserProfile;
    }

    private async getFiledName(element: ElementFinder): Promise<string> {
        return element.element(by.css(this.fieldNameSelector)).getText();
    }
    private async getFieldText(element: ElementFinder): Promise<string> {
        return element.element(by.css(this.fieldTextSelector)).getText();
    }

    private async isNewsLetterToggleSelected(element: ElementFinder): Promise<boolean> {
        return element.element(by.css(this.newsLetterToggleSelector)).isSelected();
    }
}
