import {expect} from 'chai';
import LoginPo from '../pageobjects/loginPO'
import signUpPO from '../pageobjects/signUpPo'
import TestHelpers from '../utils/helper'

describe('orientation', ()=>{

    it('12. Change and verify device orientation', async()=>{

        // Get the current device orientation
        driver.getOrientation().then(async(currentOrientation)=> {
        console.log(`Current Orientation: ${currentOrientation}`);
        await expect (currentOrientation).to.be.equal('PORTRAIT')
        });

        // Set device orientation to LANDSCAPE
        await driver.pause(10000)
        await driver.setOrientation("LANDSCAPE");

        //Get the current device orientation
        driver.getOrientation().then((currentOrientation)=> {
        console.log(`Current Orientation: ${currentOrientation}`);
        expect (currentOrientation).to.be.equal('LANDSCAPE')
        });
        
    })
    it('13. Perform login in landscape orientation', async()=>{

       //click on login menu
       await signUpPO.loginMenu.click();

        //Enter Email address
        await LoginPo.enterEmail.setValue('bansari.pujara@simformsolutions.com');
        await driver.pause(5000);

        //Click on next in keybaord
        const nextBtn = $('//XCUIElementTypeButton[@name="Next:"]')
        await nextBtn.click();

        //  Perform scroll
        //await TestHelpers.swipe(LoginPo.enterPassword, 'up')

        //Enter Password
        await LoginPo.enterPassword.setValue('Bansari@2206');

        //CLick on login button
        await LoginPo.clickLogin.click();
        await driver.pause(5000);

        //Verify Success Message
        expect (await LoginPo.successLoginMessage.getText()).to.be.equal('Success');
    })
})