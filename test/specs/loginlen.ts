import LoginPOLen from '../pageobjects/loginPOlen'
import TestHelpers from '../utils/helper'
import { expect } from 'chai';

describe('Login Tests', () => {

    it('1. Enter wrong OTP with valid Mobile Number',async () => {

        // Wait for some time as app is loading in emulator
        await driver.pause(10000)

        //enter mobile number
        await LoginPOLen.enterMobile.setValue('9512827616');
        
        //click on continue button
        await LoginPOLen.clickContinue.click();
        await driver.pause(10000)

        //Click on skip to skip location access
        await LoginPOLen.skipAccessLocation.click(); 

        //Enter wrong OTP
        await LoginPOLen.pincode.setValue('1111');

         //Now, check if the toast text message is same as entered or not
         const toastText = "Wrong OTP entered. Please enter the correct OTP";
         const isToastDisplayed = await TestHelpers.isToastMessageDisplayed(toastText);
 
         //Now, check if the Wrong OTP Error text is displayed 
         await expect(isToastDisplayed).to.be.true;
         
         console.log("Successful TestRun with wrong OTP");
     })

     it('2. Enter Invalid Mobile Number', async()=>{

         //Relaunch the App
         await driver.launchApp();
         await driver.pause(10000)

        // Click on the input field first to focus
        await LoginPOLen.enterMobile.click(); 

        //Enter a Invalid Mobile Number
        await LoginPOLen.enterMobile.setValue('951282761');

        //Now, check if the error text is displayed 
        expect(await LoginPOLen.loginTextFieldErrorMessage.getText()).to.equal('Please enter a valid phone number');
        
        console.log("Successful TestRun with invalid mobile numbers");
     })

     it('3. Click on continue without entering mobile number', async()=>{
         //Relaunch the App
         await driver.launchApp();
         await driver.pause(10000)

        //click on continue button without enter mobile number
        await LoginPOLen.clickContinue.click();
        await driver.pause(10000)

         //Now, check if the error text is displayed 
         expect(await LoginPOLen.loginTextFieldErrorMessage.getText()).to.equal('Please enter a valid phone number');

         console.log("Validation message is displayed while click on continue without entering number");
     })

     afterEach(async () => {
        await driver.closeApp();
         });
    }) 

    