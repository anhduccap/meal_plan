import {Types} from '../../actions/auth'
import initialState from './initial_state'

export default (state = initialState, action)=>{
    switch(action.type){
        case Types.checkEmail:
            return state.setIn(["form","emailError"], action.error);
        case Types.checkPassword:
            return state.setIn(["form","passwordError"], action.error);
        case Types.checkConfirm:
            return state.setIn(["form","confirmError"],action.error)
        case Types.changeFormField:
            return state.setIn(["form",action.key],action.value);
        case Types.loginRequest:
            return state
                    .set("isFetching",true)
                    .set("error",null)
        case Types.loginSuccess:
            return state
                    .set("isFetching",false)
                    .set("error",null)
                    .set("logoutState",false)
        case Types.loginFail:
            return state
                    .set("isFetching",false)
                    .set("error",action.error)
        case Types.registerRequest:
            return state
                    .set("isFetching", true)
                    .set("error", null);
        case Types.registerSuccess:
            return state
                    .set("isFetching", false)
                    .set("error", null)
                    .set("logoutState", false);
        case Types.registerFailure:
            return state
                    .set("isFetching", false)
                    .set("error", action.error);
        case Types.getUser:
            return state
                    .set("isFetching", true)
                    .set("error", null)
		case Types.getUserSuccess:
            return state
                    .set("isFetching", false)
                    .set("error", null)
                    .set("user", action.user);
		case Types.getUserFailure:
			return state
                    .set("isFetching", false)
                    .set("error", action.error)
        case Types.resetForm:
            return state.set("form",initialState.form)
        default:
            return state;
    }
}