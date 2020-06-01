import { resolve } from 'path';

export const UTF8_ENCODING = 'utf8';
export const VERIFICATION_RESULTS_FOLDER: string = resolve('./test-results/');
export const FRAMEWORK_CONFIG_FILE_PATH: string = resolve(`./framework.conf.json`);
export const ALLURE_RESULTS_FOLDER: string = resolve(VERIFICATION_RESULTS_FOLDER, './allure-results/');
export const SNACK_BAR_MESSAGE = {
    incorrectCredentials: 'Uh oh! Email or password is incorrect',
};
