import { expect } from "chai";
describe('Network', ()=>{

   
    it('1. Network settings', async()=>{

        await driver.terminateApp('com.example.apple-samplecode.UIKitCatalogY3S8VKG4X6');
        //settings
        const mobSetting = await $('//XCUIElementTypeIcon[@name="Settings"]');
        await mobSetting.click();

        // Verify airplane button
        const apBtn = await $('//XCUIElementTypeStaticText[@name="AIRPLANE_MODE"]')
        expect (await apBtn.getText()).to.equal('Airplane Mode')

        if(!apBtn.isDisplayed()){

            console.log('Airplane mode toggle not displayed')

        }else{
            const toggle = await $('//XCUIElementTypeSwitch[@name="Airplane Mode"]');
            await toggle.click();

            //Click on home button
            await driver.back();

        // Lunch app
        await driver.execute('mobile: launchApp', { bundleId: 'com.example.apple-samplecode.UIKitCatalogY3S8VKG4X6' });
        }

    
    });

        
    });