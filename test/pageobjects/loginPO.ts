class LoginPO{

    get enterEmail(): any{
        return $('//android.widget.EditText[@content-desc="input-email"]')
    }

    get enterPassword(): any{
        return $('//android.widget.EditText[@content-desc="input-password"]')
    }

    get clickLogin():any{
        return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup')
    }

    get successLoginPopUp():any{
        return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout')
    }

    get successLoginMessage():any{
        return $('~android:id/message')
    }

}
export default new LoginPO();