import type { Options } from '@wdio/types'
const path = require('path');
import { driver } from '@wdio/globals'
import TestHelpers from './test/utils/helper'
export const config: Options.Testrunner = {
    //
    // ====================
    // Runner Configuration
    // ====================
    // WebdriverIO supports running e2e tests as well as unit and component tests.
    //runner: 'local',
   // autoCompileOpts: {
    //     autoCompile: true,
    //     tsNodeOpts: {
    //         project: './tsconfig.json',
    //         transpileOnly: true
    //     }
    // },
    
    
    //port: 4723,
 
    specs: [
        './test/specs/**/API.ts'
    ],

    maxInstances: 10,

    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
      
    }],

    logLevel: 'info',
    
    //baseUrl: 'https://localhost',
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    // Default request retries count
    connectionRetryCount: 3,
    services: ['chromedriver'],
    //services: ['appium'],  
    framework: 'mocha',   
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            const screenshotFileName = `${test.title}.png`;
            const screenshotFilePath = path.join(process.cwd(), 'screenshots', screenshotFileName);
            await driver.saveScreenshot(screenshotFilePath);
        }
    },    
}
