
class signUpPO{
     // baseXPath and endpath to remove redundancy of locators
    private baseXPath = '//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/';
   

     get loginMenu(): any{
          return $('~Login');
     }
     get signUpLink(): any{
          return $('~button-sign-up-container');
     }
     get mailInput(): any{
          return $('~input-email');
     }
     get passwordInput(): any{
          return $('~input-password');
     }
     get confirmPasswordInput(): any{
          return $('~input-repeat-password');
     }
     get signUpBtn(): any{
          return $('~button-SIGN UP')
     }
     get emailValidation(): any{
          return $(this.baseXPath+ 'android.widget.TextView[1]');    
      }
      get passwordValidation(): any{
          return $(this.baseXPath+ 'android.widget.TextView[2]');    
      }
     get confirmPasswordValidation(): any{
          return $(this.baseXPath+ 'android.widget.TextView[3]');    
      }

      get signUpsuccessPopup(): any{
          return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout');    
      }

      get signUpsuccessMessage(): any{
          return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.TextView');    
      }

     // async clickOnLoginMenu(){
     // return await this.loginMenu.click();

     // }
     // async clickOnSignUpLink(){
     //      return await this.signUpLink.click();

     // }
     // async enterEmail(emailId:string){
     //      return await this.emailInput.setValue(emailId);

     // }
     // async enterPassword(password:string){
     //      return await this.passwordInput.setValue(password);

     // }
     // async enterConfirmPassword(confirmpassword:string){
     //      return await this.confirmPaaswordInput.setValue(confirmpassword);

     // }
     // async clickOnSignUpBtn(){
     //      return await this.signUpBtn.click()
     // }

     // async verifyconfirmpasswordvalidation(){
     //      return await this.confirmPasswordValidation;
          
     // }
}
export default new signUpPO();