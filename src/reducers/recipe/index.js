import {Types_recipe} from '../../actions/recipe'
import initialstate from './initial_state'

export default (state = initialstate, action)=>{
    switch(action.type){
        case Types_recipe.getRecipeRequest:
            return state
                .set("isLoading",true)
                .set("error",null)
        case Types_recipe.getRecipeSuccess:
            return state
                .set("isLoading",false)
                .set("error",null)
                .set("data",action.recipes)
        case Types_recipe.getRecipeFailure:
            return state
                .set("isLoading",false)
                .set("error",action.error)
        default:
             return state
    }
}