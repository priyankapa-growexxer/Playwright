// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const Config = ({                       
  testDir: './tests',                   
  timeout: 90 *1000,                    
  expect : {                          
    timeout: 40 * 1000,

  },
  reporter: 'html',              

  use: {
  
    browserName: 'chromium',
    headless: false
  },

 });
module.exports = Config

