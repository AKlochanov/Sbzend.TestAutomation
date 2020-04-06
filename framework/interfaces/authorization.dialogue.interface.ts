import { ISnackBar } from './snackbar.interface';

export interface IAuthorizationDialogue extends ISnackBar {
    emailValidationMessage?: string;
    passwordValidationMessage?: string;
}
