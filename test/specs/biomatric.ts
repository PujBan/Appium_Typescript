import bioPO from '../pageobjects/biomatricPO';
import { expect } from 'chai';
import LoginPO from '../pageobjects/loginPO';
import helper from '../utils/helper'
import signUpPO from "../pageobjects/signUpPo";

describe("Gestures", ()=>{

      it("Should login successfully with TouchID", async () => {
        await helper.waitForElementToDisplayed(await signUpPO.loginMenu);
        await signUpPO.loginMenu.click();
        await bioPO.biomatric.click();
        await driver.pause(2000);
        await driver.touchId(true);
        await helper.waitForElementToDisplayed(await LoginPO.successLoginMessage);
        expect(await LoginPO.successLoginMessage.isDisplayed()).to.be.true;
        const s = await LoginPO.successLoginMessage.getText();
        console.log(s, "fnenfed");
        (await LoginPO.loginOk).click();
        console.log("Login successfull with Touch ID");
      });
      it("Drag and Drop", async () => {
        await helper.waitForElementToDisplayed(await bioPO.dragMenu);
        await bioPO.dragMenu.click();
        await driver.pause(1000);
        await helper.dragAndDrop();
        expect(await bioPO.congratulationsText.isDisplayed()).to.be.true;
      });
      it("Locations", async () => {
        
        // Get current location
        const location = await driver.getGeoLocation()
        await console.log('Current Location:', location)

        // Set Location
        await driver.setGeoLocation({latitude: 121.21, longitude: 11.56, altitude: 94.23});
        //await driver.setGeoLocation(121.21, 11.56, 10);
      });
      

})

