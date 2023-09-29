import bioPO from '../pageobjects/biomatricPO';
import { expect } from 'chai';
import LoginPO from '../pageobjects/loginPO';
import helper from '../utils/helper'
import signUpPO from "../pageobjects/signUpPo";

describe("Biomatic and drag", ()=>{

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

      

})