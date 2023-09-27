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
        await FormPo.returnBtn.click();
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

    it.skip("9. Select value from dropdown", async()=>{
        // Open dropdown
        await FormPo.dropdown.click();
        let listView = await $$('//XCUIElementTypePicker[@name="Dropdown picker"]/XCUIElementTypePickerWheel')

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
        //await FormPo.ddoption2.click();

        // let options = await select.$$('option')
        // console.log('DropDown values count:'+ options.length)
        // expect(options.length).to.be.equal(4)
    })

    it("10.Working with buttons", async()=>{

        //const scrollnumber: number = 2;

        // perform swipe to reach to butons
        //await driver.touchAction([
            //{ action: 'press', x:197, y:597},
            //{action: 'moveTo', x:182, y:253},
           // 'release'
          //  ]);
       
        //await (new wd.TouchAction(driver)).press({x:243, y:902}).moveTo({x:272, y:392}).release().perform()
         await driver.execute('mobile: scroll',{direction: 'down'});
        // Verify button heading 
        await FormPo.btnTitle.isDisplayed();
        
    })

    it.only("11.perform horizontal scroll", async()=>{

        // Click on swipe link
        await FormPo.swipeMenu.click();
        //Perform scroll
         await driver.execute('mobile: scroll',{direction: 'down'});  
         await driver.execute('mobile: scroll',{direction: 'up'}); 


    })
})