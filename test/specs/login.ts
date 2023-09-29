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
        expect (await LoginPo.successLoginMessage.getText()).to.equal('Success')

        
    })

    it("Alert", async () => {

        driver.execute('mobile: alert', 
        {
        'action': 'accept', 
        'buttonLabel': 'OK'
    });
       
    });

    it("Checkbox", async()=>{
        
        const checkbox = $('//android.widget.CheckBox[@text="Checkbox Label"]');

        // Check if the checkbox is selected
        const isSelected = await checkbox.isSelected();
        console.log(`Checkbox is selected: ${isSelected}`);

        // To toggle the checkbox (select if not selected, deselect if selected)
        await checkbox.click();
    })

    it("RadioButton", async()=>{

        const radioButton = $('//android.widget.RadioButton[@text="Radio Button Label"]');

        // Check if the radio button is selected
        const isSelected = await radioButton.isSelected();
        console.log(`Radio button is selected: ${isSelected}`);
        
        // To select the radio button (if not already selected)
        if (!isSelected) {
          await radioButton.click();
        }
    })

})