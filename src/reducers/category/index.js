import {Types} from '../../actions/category'
import initialState from './initial_state'

export default ( state = initialState, action)=>{
    switch(action.type){
        case Types.getCategoriesRequest:
            return state
                .set("isLoading", true)
                .set("error", null);
		case Types.getCategoriesSuccess:
			return state
				.set("isLoading", false)
				.set("error", null)
				.set("data", action.categories);
		case Types.getCategoriesFailure:
            return state
                .set("isLoading", false)
                .set("error", action.error);
		default:
			return state;
    }
}