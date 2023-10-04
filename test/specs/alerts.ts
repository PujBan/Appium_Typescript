import { expect } from "chai";
describe("Alerts", () => {


    beforeEach(async () => {
        // Lunch app
        await driver.execute('mobile: launchApp', { bundleId: 'com.example.apple-samplecode.UIKitCatalog' });
        //Click on back
        const back = await $('//XCUIElementTypeButton[@name="UIKitCatalog"]');
        await back.click();

        // click on view
        const view = await $('//XCUIElementTypeStaticText[@name="Views"]')
        await view.click();
        driver.pause(5000)

        // CLick on alert controller
        const alert = await $('//XCUIElementTypeStaticText[@name="Alert Controllers"]')
        await alert.click();
        expect(await alert.getText()).to.equal('Alert Controllers')

    });

    it("Simple", async () => {
        // Click on simple
        const simple = await $('//XCUIElementTypeStaticText[@name="Simple"]')
        await simple.click();

        // verify Alert 
        const alert = await $('//XCUIElementTypeAlert[@name="A Short Title is Best"]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]')
        expect(await alert.isDisplayed()).to.be.true;

        //accept
        await driver.execute('mobile: alert', {
            action: 'accept',
            buttonLabel: 'OK'

        })
    })

    it("2Buttons", async () => {
        // Click on simple
        const okCancel = await $('//XCUIElementTypeStaticText[@name="OK / Cancel"]')
        await okCancel.click();

        // verify Alert 
        const alert = await $('//XCUIElementTypeAlert[@name="A Short Title is Best"]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]')
        expect(await alert.isDisplayed()).to.be.true;

        //verify button
        const ok = await $('//XCUIElementTypeButton[@name="OK"]')
        expect(await ok.getText()).to.equal('OK')

        const cancel = await $('//XCUIElementTypeButton[@name="Cancel"]')
        expect(await cancel.getText()).to.equal('Cancel')

        //accept
        await driver.execute('mobile: alert', {
            action: 'accept',
            buttonLabel: 'OK'

        })
        //dismiss
        await okCancel.click();
        await driver.execute('mobile: alert', {
            action: 'dismiss',
            //buttonLabel: 'OK'

        })

    });

    it("3Buttons", async () => {
        // Click on button
        const Buttons = await $('//XCUIElementTypeStaticText[@name="Three Buttons"]')
        await Buttons.click();

        // verify Alert 
        const alert = await $('//XCUIElementTypeAlert[@name="A Short Title is Best"]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]')
        expect(await alert.isDisplayed()).to.be.true;

        //accept
        await driver.execute('mobile: alert', {
            action: 'accept',
            buttonLabel: 'Choice One'

        })

        await Buttons.click();
        await driver.execute('mobile: alert', {
            action: 'accept',
            buttonLabel: 'Choice Two'

        })

        //dismiss
        await Buttons.click();
        await driver.execute('mobile: alert', {
            action: 'dismiss',
            buttonLabel: 'Cancel'
        })
    });
    it("Action sheet simple", async () => {
        // Click on button
        const sheet = await $('//XCUIElementTypeStaticText[@name="Confirm / Cancel"]')
        await sheet.click();

        // verify Alert 
        const alert = await $('//XCUIElementTypeApplication[@name="UIKitCatalog"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther[2]/XCUIElementTypeSheet/XCUIElementTypeOther')
        expect(await alert.isDisplayed()).to.be.true;

        //Verify buttons
        const ok = await $('//XCUIElementTypeButton[@name="Confirm"]')
        expect(await ok.getText()).to.equal('Confirm')

        const cancel = await $('//XCUIElementTypeButton[@name="Cancel"]')
        expect(await cancel.getText()).to.equal('Cancel')

        //accept
        await driver.execute('mobile: alert', {
            action: 'accept',
            //buttonLabel: 'OK'

        })
        //dismiss
        await sheet.click();
        await driver.execute('mobile: alert', {
            action: 'dismiss',

        })
    });
    it("Action sheet destructive", async () => {
        // Click on button
        const sheet = await $('//XCUIElementTypeStaticText[@name="Destructive"]')
        await sheet.click();

        // verify Alert 
        const alert = await $('///XCUIElementTypeApplication[@name="UIKitCatalog"]/XCUIElementTypeWindow/XCUIElementTypeOther[2]/XCUIElementTypeSheet/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]')
        expect(await alert.isDisplayed()).to.be.true;

        //Verify buttons
        const destructive = await $('//XCUIElementTypeButton[@name="Destructive Choice"]')
        expect(await destructive.getText()).to.equal('Destructive Choice')

        const safe = await $('//XCUIElementTypeButton[@name="Safe Choice"]')
        expect(await safe.getText()).to.equal('Safe Choice')

        //accept
        await driver.execute('mobile: alert', {
            action: 'accept',
            buttonLabel: 'Safe Choice'
            //should click on safe

        })
        //dismiss
        try{
        await sheet.click();
        await driver.execute('mobile: alert', {
            //action: 'dismiss',
            buttonLabel: 'Destructive Choice'
            //should click on destructive
        })
        }catch(ERROR){
            console.log(`Error is: ${ERROR}`)
        }
    });

    afterEach(async () => {
        // Terminate app
        await driver.execute('mobile: terminateApp', { bundleId: 'com.example.apple-samplecode.UIKitCatalog' });

    });
});