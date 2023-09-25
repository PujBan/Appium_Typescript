import signUpPO from "../pageobjects/signUpPo";
import { expect } from 'chai';

describe('Sign Up', ()=>{

    beforeEach(async () => {
        // if(!signUpPO.loginMenu.isDisplayed()){
        //     // App lunch
        //     await driver.launchApp();
        //     //await driver.restartApp()
        // }
        // else{
        //     console.log('App Lunched from configurations')
        //     }

         // App lunch
         await driver.launchApp();

        // Wait for some time as app is loading in emulator
        await driver.pause(10000);
    
        //Navigate ti login menu from home menu
        await signUpPO.loginMenu.click();
        //Click on sign up button
        await signUpPO.signUpLink.click();
    });

    it('1. Enter password and confirm password different',async()=>{

        //Enter email address
        await signUpPO.mailInput.setValue('bansari.pujara@simformsolutions.com');

        //Enter password
        await  signUpPO.passwordInput.setValue('Bansari@2206');

         //Enter confirm password
         await signUpPO.confirmPasswordInput.setValue('Bansari2206');

         //Click on signUp button
         await  signUpPO.signUpBtn.click()

         // Verify Validation message
         expect (await signUpPO.confirmPasswordValidation.getText()).to.equal('Please enter the same password');

         console.log("Confirm password validation displayed properly");
    })

    it('2. Invalid Email address', async()=>{
        //Enter email address
        await signUpPO.mailInput.setValue('bansari.pujara@simformsolutions.');

        //Click on signUp button
        await  signUpPO.signUpBtn.click()
        // Verify Validation message
        expect (await signUpPO.emailValidation.getText()).to.equal('Please enter a valid email address');

        // Verify Validation message
        expect (await signUpPO.passwordValidation.getText()).to.equal('Please enter at least 8 characters');

        // Verify Validation message
        expect (await signUpPO.confirmPasswordValidation.getText()).to.equal('Please enter the same password');

    })
    it('3. Invalid Password', async()=>{
        //Enter email address
        await signUpPO.mailInput.setValue('bansari.pujara@simformsolutions.com');

        //Enter Invalid password
        await  signUpPO.passwordInput.setValue('Bansar');

        //Click on signUp button
        await  signUpPO.signUpBtn.click()

        // Verify Validation message
        expect (await signUpPO.passwordValidation.getText()).to.equal('Please enter at least 8 characters');

        // Verify Validation message
        expect (await signUpPO.confirmPasswordValidation.getText()).to.equal('Please enter the same password');

    })
    it('4. Successful signUp', async()=>{
        //Enter email address
        await signUpPO.mailInput.setValue('bansari.pujara@simformsolutions.com');

        //Enter Invalid password
        await  signUpPO.passwordInput.setValue('Bansari@2206');

        //Enter confirm password
        await signUpPO.confirmPasswordInput.setValue('Bansari@2206');

        //Click on signUp button
        await  signUpPO.signUpBtn.click()

        // Verify signup success pop-up displayed
        await signUpPO.signUpsuccessPopup.isDisplayed();

        // Verify signup success message 
        expect (await signUpPO.signUpsuccessMessage.getText()).to.equal('You successfully signed up!');

        console.log('User Signed up successfully')
    })

    afterEach(async () => {
        await driver.closeApp();
         });
})