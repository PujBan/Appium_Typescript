import { expect } from "chai";
import TestHelpers from '../utils/helper'

describe("Pickers", ()=>{


    beforeEach(async()=>{
        // Lunch app
        await driver.execute('mobile: launchApp', { bundleId: 'com.example.apple-samplecode.UIKitCatalog' });
        //Click on back
        const back = await $('//XCUIElementTypeButton[@name="UIKitCatalog"]');
        await back.click();

        //Click on Pickers
        const pickers = await $('//XCUIElementTypeStaticText[@name="Pickers"]');
        await pickers.click()
    });

    it("Date", async () => {

        //Click on date picker
        const date = await $('//XCUIElementTypeStaticText[@name="Date Picker"]')
        await date.click();

        //Click on year picker
        const yearPicker = await $('~Show year picker')
        await yearPicker.click();

        //Month picker wheel
        const values = await $$('//XCUIElementTypePickerWheel[1]');
        //await console.log('month:', elements[0].getText());

        for (let i=0; i<values.length; i++)
        {
            var text = await values[i].getText();
            console.log('pickervalue:', text);

            const params = {
                order: 'next', // To select the next value
                offset: 0.15, // You can adjust the offset as needed
                elementId: await values[i] // Get the elementId
              };
              await driver.execute("mobile: selectPickerWheelValue", params);
              await driver.pause(10000)

              var text1 = await values[i].getText();
              console.log('pickervalue:', text1);
        }
       
        // //select Month 
        // const month = 'july'
        // const year = '2024'
        // await values[0].setValue(month);
        // //await values[0].setValue()
        // await values[1].setValue(year);
        
    });
    it("Color", async () => {
        //Click on color picker
        const color = await $('//XCUIElementTypeStaticText[@name="Color Picker"]')
        await color.click();

        //Picker
        const picker = await $('//XCUIElementTypeButton[@name="Picker"]')
        if (await picker.isDisplayed()){
            await picker.click();
        }
        await console.log('Color Testing is not supported by appium')
      
    });
    it("Font", async () => {
        //Click on font picker
        const font = await $('//XCUIElementTypeStaticText[@name="Font Picker"]')
        await font.click();

        //Click on fontpicker
        const fontPicker = await $('//XCUIElementTypeStaticText[@name="UIFontPickerViewController"]')
        await fontPicker.click();

        const text = await $('//XCUIElementTypeStaticText[@name="Palatino"]')
        expect (await text.isDisplayed()).to.be.true

        //await TestHelpers.scroll('R')   
    });
    it.only("image", async () => {
        //Click on image picker
        const image = await $('//XCUIElementTypeStaticText[@name="Image Picker"]')
        await image.click();

        //Click on choose image
        const chooseImage = await $('//XCUIElementTypeStaticText[@name="Choose an Image"]')
        await chooseImage.click();

        const element = await $('//XCUIElementTypeImage[@name="Photo, August 09, 2012, 2:59 AM"]')
       await element.click();

       await driver.back();

    });
    // it("PickerWheel", async () => {
      
    // });
    // afterEach(async()=>{
    //     // Terminate app
    //     await driver.execute('mobile: terminateApp', { bundleId: 'com.example.apple-samplecode.UIKitCatalog'});
       
    // });


});