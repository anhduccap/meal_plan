import {Types} from '../../actions/shop'
import initialState from './initial_state'

export default (state=initialState,action)=>{
    switch(action.type){
        case Types.getListRequest:
            return state
                .set("isLoading", true)
                .set("error", null);
		case Types.getListSuccess:
			return state
				.set("isLoading", false)
				.set("error", null)
				.set("data", action.data);
		case Types.getListFailure:
			return state
				.set("isLoading", false)
				.set("error", action.error)
				.set("data", []);

		case Types.changeFormField:
			return state.setIn(["form",action.key],action.value);
		case Types.resetForm:
			return state.set("form", initialState.form);
		default:
			return state
    }
}