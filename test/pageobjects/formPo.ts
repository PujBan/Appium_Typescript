class FormPo{

<<<<<<< HEAD
    //get formMenu():any{return $('//android.widget.Button[@content-desc="Forms"]/android.widget.TextView')}
    //get inputField():any{return $('//android.widget.EditText[@content-desc="text-input"]')}
    //get inputResult():any{return $('//android.widget.TextView[@content-desc="input-text-result"]')
    //get dropdown():any{return $('//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.widget.EditText')}
    //get ddOptions():any{return $$('~com.wdiodemoapp:id/select_dialog_listview')}

    get formMenu():any{return $('~Forms')}
    get inputField():any{return $('~text-input')}
    get inputResult():any{return $('~input-text-result')}
    get returnBtn():any{return $('~Return')}
    get switchBtn():any{return $('~switch')}
    get switchMessage():any{return $('~switch-text')}
    get dropdown():any{return $('//XCUIElementTypeTextField[@name="text_input"]')}
    get ddOptions():any{return $$('//XCUIElementTypePicker[@name="Dropdown picker"]/XCUIElementTypePickerWheel')}
    get ddoption2():any{return $('//XCUIElementTypePicker[@name="Dropdown picker"]/XCUIElementTypePickerWheel/XCUIElementTypeOther[2]')}
    get btnTitle():any{return $('Buttons')}
    get swipeMenu():any{return $('~Swipe')}


//XCUIElementTypeOther[@name="Dropdown"]
    

}
=======
    get formMenu():any{return $('//android.widget.Button[@content-desc="Forms"]/android.widget.TextView')}
    get inputField():any{return $('//android.widget.EditText[@content-desc="text-input"]')}
    get inputResult():any{return $('//android.widget.TextView[@content-desc="input-text-result"]')}
    get switchBtn():any{return $('~switch')}
    get switchMessage():any{return $('~switch-text')}
    get dropdown():any{return $('//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.widget.EditText')}
    get ddOptions():any{return $$('~com.wdiodemoapp:id/select_dialog_listview')}
}

>>>>>>> c9495dccbb1c8568078191ff04e23c8b166ded85
export default new FormPo();