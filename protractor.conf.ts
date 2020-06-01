import { Config } from 'protractor';
import { SpecReporter, StacktraceOption } from 'jasmine-spec-reporter';
import { ENVIRONMENT } from './framework/environment';
import * as CONSTANTS from './framework/data-provider/constants';

const specTimeout = 720000;
export let config: Config = {
    allScriptsTimeout: specTimeout,
    getPageTimeout: specTimeout,
    framework: 'jasmine',
    directConnect: true,
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            perfLoggingPrefs: {
                enableNetwork: true,
                enablePage: false,
            },
        },
        loggingPrefs: {
            performance: 'ALL',
            browser: 'ALL',
        },
    },
    specs: ['test-suites/verification/**/*.js'],
    SELENIUM_PROMISE_MANAGER: false,
    async beforeLaunch() {
        ENVIRONMENT.init(CONSTANTS.FRAMEWORK_CONFIG_FILE_PATH);
    },

    noGlobals: true,
    async onPrepare() {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(
            new AllureReporter({
                resultsDir: CONSTANTS.ALLURE_RESULTS_FOLDER,
            }),
        );
        jasmine.getEnv().addReporter(
            new SpecReporter({
                customProcessors: [],
                spec: {
                    displayDuration: true,
                    displayErrorMessages: true,
                    displaySuccessful: true,
                    displayFailed: true,
                    displayPending: false,
                    displayStacktrace: StacktraceOption.RAW,
                },
                summary: {
                    displayDuration: true,
                    displayErrorMessages: false,
                    displaySuccessful: true,
                    displayFailed: true,
                    displayPending: false,
                    displayStacktrace: StacktraceOption.NONE,
                },
                print: (log: string) => {
                    console.log(log);
                },
            }),
        );
        exports.config = {
            framework: 'jasmine2',
            onPrepare: function () {
                var AllureReporter = require('jasmine-allure-reporter');
                jasmine.getEnv().addReporter(
                    new AllureReporter({
                        resultsDir: CONSTANTS.ALLURE_RESULTS_FOLDER,
                    }),
                );
            },
        };
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: specTimeout,
        print() {},
    },
};
