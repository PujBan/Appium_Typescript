class LoginPO{

    get enterEmail(): any{
        return $('~input-email')
    }

    get enterPassword(): any{
        return $('~input-password')
    }

    get clickLogin():any{
        return $('(//XCUIElementTypeOther[@name="LOGIN"])[2]')
    }

    get successLoginPopUp():any{
        return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout')
    }

    get successLoginMessage():any{
        return $('//XCUIElementTypeStaticText[@name="Success"]')
        //return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.TextView')   
    }
    get loginOk() {
        return $("~OK");
    }

}
export default new LoginPO();


// class test{

//     private email:any;
//     private password:string;

//      constructor(){
//         this.email= '~input-email';
//         this.password='~input-password';
//     };

//     async getEmail():Promise<string>{
//         return this.email
//     };
//     async getpasssword():Promise<string>{
//         return this.password
//     }
// }export default new test();