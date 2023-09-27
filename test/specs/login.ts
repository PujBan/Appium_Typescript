import signUpPO from "../pageobjects/signUpPo";
import LoginPo from "../pageobjects/loginPO";
import { expect } from 'chai';

describe('Login', ()=>{

    it('5. Success Login', async()=>{

        //click on login menu
        await signUpPO.loginMenu.click();
        //Enter Email address
        await LoginPo.enterEmail.setValue('bansari.pujara@simformsolutions.com')

        //Enter Password
        await LoginPo.enterPassword.setValue('Bansari@2206')

        //CLick on login button
        await LoginPo.clickLogin.click();
        await driver.pause(10000);
        
        //Verify Success pop-up
        await LoginPo.successLoginPopUp.isDisplayed();
        

        //Verify Success Message
        expect (await LoginPo.successLoginMessage.getText()).to.equal('You are logged in!')
        
    })
})