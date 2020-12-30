import {Record} from 'immutable'

export default new Record({
    isFetching:false,
    error:null,
    user:null,
    logoutState:false,
    form: new Record({
        email:"",
        emailError:"",
        password:"",
        passwordError:"",
        username:"",
        usernameError:"",
        confirm:"",
        confirmError:"",
        isChecked:false
    })()
})();