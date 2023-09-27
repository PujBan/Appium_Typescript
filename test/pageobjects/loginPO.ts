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
<<<<<<< HEAD
        return $('//XCUIElementTypeStaticText[@name="Success"]')
=======
        return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.TextView')   
>>>>>>> c9495dccbb1c8568078191ff04e23c8b166ded85
    }

}
export default new LoginPO();