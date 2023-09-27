import signUpPO from "../pageobjects/signUpPo";
import { expect } from 'chai';
describe('Login', ()=>{

    it('1. Network settings', async()=>{

        //enable Airplane mode
        await driver.toggleAirplaneMode();
        await driver.pause(5000);

        // Enable wifi
        //await driver.toggleWiFi();

        //Enable location
        //await driver.toggleLocationServices();   
    })
    
    it.skip('2. Sign up while airplane mode is on ', async()=>{
        // App lunch
        await driver.launchApp();
       // Wait for some time as app is loading in emulator
       await driver.pause(10000);
       //Navigate ti login menu from home menu
       await signUpPO.loginMenu.click();
       //Click on sign up button
       await signUpPO.signUpLink.click();
        //Enter email address
        await signUpPO.mailInput.setValue('bansari@gmil.com');
        //Enter Invalid password
        await  signUpPO.passwordInput.setValue('Sim@1234');
        //Enter confirm password
        await signUpPO.confirmPasswordInput.setValue('Sim@1234');
        //Click on signUp button
        await  signUpPO.signUpBtn.click()
        // Verify signup success pop-up displayed
        await signUpPO.signUpsuccessPopup.isDisplayed();
         
    })
    it.skip('3. Explore webview while network is not present ', async()=>{
        // App lunch
        await driver.launchApp();
       // Wait for some time as app is loading in emulator
       await driver.pause(10000);
       // CLick on webview
       const webviewMenu:any = $('//android.widget.Button[@content-desc="Webview"]/android.widget.TextView[2]')
       await webviewMenu.click();

       // Verify error message
       const networkError = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]')
       expect (await networkError.getText()).to.equal('Error loading page')     
    })
    it('4. Handel network error', async()=>{
       // CLick on webview
       const webviewMenu:any = $('//android.widget.Button[@content-desc="Webview"]/android.widget.TextView[2]')
       await webviewMenu.click();
        
       try{
        // Verify webdriverIO AI bot
       const aiBot = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[3]/android.view.View/android.view.View/android.widget.Image')
       expect (await aiBot.isDisplayed()).to.be.true;

       }catch(error){
         // Handle the exception
            if (Error.name === 'no such element') {
                console.error('Element not found:', error);
                // Add your error handling logic here
            } else {
                // Handle other types of exceptions
                console.error('An error occurred:', error);
            }
       }  
    })
    
    // afterEach(async () => {
    //     await driver.closeApp();
    //      });
})