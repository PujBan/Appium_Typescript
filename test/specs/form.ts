import FormPo from '../pageobjects/formPo';
import {expect} from 'chai';
import TestHelpers from '../utils/helper'
import formPo from '../pageobjects/formPo';

describe( "Form Actions", ()=>{

    // beforeEach(async()=>{
    //     // Navigate to form page
    //     await FormPo.formMenu.click();
    // })

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
    it("9. Select value from dropdown", async()=>{

        // click on drop down button
        await formPo.dropdown.click();

        /*const elements = await $$("XCUIElementTypePickerWheel"); // Locate the element
        for(let i=0; i<elements.length; i++){
            console.log('Total elements:', elements.length)
             // Create a Map with parameters
        var params = {
            order: 'next',
            offset: 0.15,
            elementId: await elements[i]
                        //elementId: await $('~')
          };
           // Execute the JavaScript command
        await driver.execute('mobile: selectPickerWheelValue', params);
        }

        const done = $("//XCUIElementTypeOther[@label='Done' and @accessible='true']");
        (await done).click();*/

        const values = await $("XCUIElementTypePickerWheel"); // Locate the element
        await values.setValue('Appium is awesome');
       

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
         await driver.execute('mobile: scroll',
         {  name:'Buttons',
            //direction: 'down'
        });
        // Verify button heading 
        await FormPo.btnTitle.isDisplayed();

        // click on active button
        await formPo.btnActive.click();

        //pop-up
        driver.execute('mobile: alert', 
        {
        'action': 'dismiss',
        //'action': 'accept', 
        'buttonLabel': 'Ask me later'
        //'buttonLabel': 'OK'
    });
        
    })

    it.only("11.perform scroll", async()=>{
        
        // Click on swipe link
        await FormPo.swipeMenu.click();
        //Perform scroll
         //await driver.execute('mobile: scroll',{direction: 'down'});  
         //await driver.execute('mobile: scroll',{direction: 'up'}); 

         // Vertical Scroll
         await TestHelpers.scroll('You found me!!!')
         expect (await formPo.foundMe1.isDisplayed()).to.be.true;
         //driver.execute('mobile: doubleTap', {element: (formPo.foundMe1).value.ELEMENT});

    })
    it.only("12. Zoom", async()=>{
        const element = await $('//XCUIElementTypeOther[@name="WebdriverIO logo"]/XCUIElementTypeImage');
        await driver.execute('mobile: pinch', {
            element: element.elementId,
            scale: 2,// Adjust the scale value as needed
            velocity: 1.1
          });

          //FUNCTION DECLARATION         
        //   async function greet(name?:string):string{
        //     return  'Hello, ${name}'
        //   }
        //   let greeting = greet('bansari');
        //   await console.log(greeting);

          function test():void{
            console.log('test');
          }
          test();

           
       
    })
})