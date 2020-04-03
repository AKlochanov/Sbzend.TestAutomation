import { existsSync, readFileSync } from 'fs';
import * as CONSTANTS from './data-provider/constants';

export class Environment {
    appUrl: string;
    defaultTimeout: number;
    defaultPassword: string;

    init(configPath: string): this {
        console.log('Initializing Framework Environment...');

        const config: Environment = this.readFromFile(configPath);
        Object.assign(this, config);

        if (config.appUrl === undefined) {
            throw Error('!!! Application url is not specified in the Framework Environment !!!'.toUpperCase());
        }

        if (config.defaultPassword === undefined) {
            throw Error('!!! Default password is not specified in the Framework Environment !!!'.toUpperCase());
        }

        if (config.defaultTimeout === undefined) {
            throw Error('!!! Default timeout is not specified in the Framework Environment !!!'.toUpperCase());
        }

        return this;
    }

    private readFromFile(filePath: string) {
        if (existsSync(filePath)) {
            return JSON.parse(readFileSync(filePath, CONSTANTS.UTF8_ENCODING).toString());
        }
        throw Error('!!! Framework configuration file not found !!!'.toUpperCase());
    }
}

export const ENVIRONMENT: Environment = new Environment();
