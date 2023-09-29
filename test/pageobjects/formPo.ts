class FormPo{

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
    get foundMe():any{return $('~Horizontal scroll bar, 1 page')}
    get foundMe1():any{return $('//XCUIElementTypeStaticText[@name="You found me!!!"]')}
    get lastOnSwipe():any{return $('//XCUIElementTypeStaticText[@name="COMPATIBLE"]')}
    get btnActive():any{return $('//XCUIElementTypeOther[@name="Active"]')}

//XCUIElementTypeOther[@name="Dropdown"]
    

}
export default new FormPo();