
import FormPo from '../pageobjects/formPo';
import {expect} from 'chai';

describe("1. Form Actions", ()=>{

    beforeEach(async()=>{
        // Navigate to form page
        await FormPo.formMenu.click();
    })

    it("6.Input Text", async()=>{

        // Enter value in filed
        await FormPo.inputField.setValue('QA Engineer');

        // Verify Input text in result filed
        expect (await FormPo.inputResult.getText()).to.equal('QA Engineer')
    })

    it("7.Switch Toggle button to off", async()=>{
        // click on switch toggle
        await FormPo.switchBtn.click();
        await driver.pause(5000)
       
    })
    it("8.Switch Toggle button to on", async()=>{

        // click on switch toggle
        await FormPo.switchBtn.click();

    })
    it.only("9. Select value from dropdown", async()=>{

        // Open dropdown
        await FormPo.dropdown.click();

        let listView = await $$('//android.widget.CheckedTextView')
        //await listView.waitForExist();

        // Find child elements within the ListView (e.g., items)
        const items = listView;
        await Promise.all(items.map(item => item.waitForExist()));
        await driver.pause(5000)
        console.log('Before For loop')
        // Iterate through the items and perform actions
        for (const item of items) {
            console.log('In for loop')
            const itemText = await item.getText();
            console.log('DropDown values count:'+ items.length)
            console.log(`Item Text: ${itemText}`);
        
        }
        // let options = await select.$$('option')
        // console.log('DropDown values count:'+ options.length)
        // expect(options.length).to.be.equal(4)
   
    })
})