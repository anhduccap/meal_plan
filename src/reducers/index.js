import {combineReducers} from 'redux'

import auth from './auth'
import category from './category'
import recipe from './recipe'
import plan from './plan'
import shop from './shop'
export default combineReducers({
    category,
    auth, 
    recipe,
    plan,
    shop
})