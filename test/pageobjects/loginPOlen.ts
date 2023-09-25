
class LoginPOLen {
    // baseXPath and endpath to remove redundancy of locators
    private baseXPath = "//*[@resource-id='com.lenskart.app:id/";
    private endXPath = "']";

    // Define selectors using getter methods
    get clickLoginViaPhoneText() {
        return $(this.baseXPath + "loginMobile" + this.endXPath); 
    }

    get enterMobile() {
        return $(this.baseXPath + "input_phone_number" + this.endXPath);
    }

    get clickContinue() {
        return $(this.baseXPath + "btn_continue" + this.endXPath);
    }

    get skipAccessLocation() {
        return $(this.baseXPath + "text_do_it_later" + this.endXPath);
    }

    get skipTimeToPose() {
        return async () => {
        let timeToPoseElement = $(this.baseXPath + "title" + this.endXPath);
        browser.pause(20000);
        if (await timeToPoseElement.isDisplayed()){
            console.log("Inner if");
            const skipButton = $(this.baseXPath + "btn_skip" + this.endXPath);
            skipButton.click();
        }
        else{
            console.log("Time-to-Pose Screen is not present");
        }
    };
    }

    get homepageLogo() {
        return $(this.baseXPath + "iv_logo" + this.endXPath);
    }

    get homepageCall() {
        return $(this.baseXPath + "iv_call" + this.endXPath);
    }

    get loginTextFieldErrorMessage() {
        return $(this.baseXPath + "textinput_error" + this.endXPath);
    }

    get pincode() {
        return $(this.baseXPath + "pin_otp_code" + this.endXPath);
    }
}
export default new LoginPOLen();
