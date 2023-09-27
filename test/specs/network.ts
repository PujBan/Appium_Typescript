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

    it('2.SignUp while network in not available', async()=>{
         //click on login menu
         await signUpPO.loginMenu.click();
         //Click on sign up button
        await signUpPO.signUpLink.click();
        //Enter email address
        await signUpPO.mailInput.setValue('bansari.pujara@simformsolutions.com');

        //Enter Invalid password
        await  signUpPO.passwordInput.setValue('Bansari@2206');

        //Enter confirm password
        await signUpPO.confirmPasswordInput.setValue('Bansari@2206');

        //Click on signUp button
        await  signUpPO.signUpBtn.click()

        // Verify signup success message 
        expect (await signUpPO.signUpsuccessMessage.getText()).to.equal('You successfully signed up!');

    })
    it('3. Explore webview while network is not available', async()=>{
      
        //Click on web view
        const webviewMenu = $('//android.widget.Button[@content-desc="Webview"]/android.widget.TextView[2]')
        await webviewMenu.click();

        //Verify network error
        const error = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]')
        expect ((await error).getText()).to.equal('Error loading page')

   })

   it('4. Handel network error', async()=>{
      
    //Click on web view
    const webviewMenu = $('//android.widget.Button[@content-desc="Webview"]/android.widget.TextView[2]')
    await webviewMenu.click();

    try{
        const wdioAI = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[4]/android.view.View[2]/android.widget.Image')
        expect (await wdioAI.isDisplayed()).to.be.true;

    }catch(error){
         // Handle the exception
    if (Error.name === 'NoSuchElementError') {
        console.error('Element not found:', Error);
        // Add your error handling logic here
      } else {
        // Handle other types of exceptions
        console.error('An error occurred:', Error);
      }

    }

})
})