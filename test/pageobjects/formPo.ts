class FormPo{

    get formMenu():any{return $('//android.widget.Button[@content-desc="Forms"]/android.widget.TextView')}
    get inputField():any{return $('//android.widget.EditText[@content-desc="text-input"]')}
    get inputResult():any{return $('//android.widget.TextView[@content-desc="input-text-result"]')}
    get switchBtn():any{return $('~switch')}
    get switchMessage():any{return $('~switch-text')}
    get dropdown():any{return $('//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.widget.EditText')}
    get ddOptions():any{return $$('~com.wdiodemoapp:id/select_dialog_listview')}
}

export default new FormPo();