import {Types} from '../../actions/plan'
import initialState from './initial_state'

export default (state = initialState,action)=>{
    switch(action.type){
        case Types.completegetPlan:
            return state.set("isLoading", true);
        case Types.getPlansSuccess:
            return state
                    .set("isLoading", false)
                    .set("data", action.data);
        case Types.changeFormField:
            return state.setIn(["form", action.key], action.value);
        case Types.setForm:
            return state.set("form", action.formData);
        case Types.pushItem:
            let exits=state.form[action.key].findIndex(
                recipe => recipe.Id === action.recipe.Id
            );
            let list_recipe= exits!==-1
                ? [...state.form[action.key]]
                : [action.recipe, ...state.form[action.key]]
            return state.setIn(["form",action.key],list_recipe)
        case Types.removeItem:
            let temp = [...state.form[action.key]];
            temp.splice(
                temp.findIndex(e => e === action.recipe),
                1
            );
            return state.setIn(["form", action.key], temp);
        // case Types.setSelectDateSuccess:
        //     return state.set("selectedDate",action.selectedDate );
        default:
            return state;
    }
}