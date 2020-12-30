import {all} from 'redux-saga/effects'
import {
    watchloginwithEmail,
    watchregisterwithEmail,
    watchgetUser,
} from './auth'

import {
    watchgetCategories,
    watchUp
} from './category' 

import{
    watchgetRecipes,
    watchsetUserLike
} from './recipe'

import {
    watchgetPlans,
    watchsetPlan,
    watchaddPlan,
    watchresetForm,
    // watchsetSelectedDate
}from './plan'

import {
    watchgetLists,
    watchpushLists,
    watchupdateLists
} from './shop'
export default function* rootSaga(){
    yield all([
        watchregisterwithEmail(),
        watchloginwithEmail(),
        watchgetUser(),
        watchgetCategories(),
        watchgetRecipes(),
        watchsetUserLike(),
        watchgetPlans(),
        watchsetPlan(),
        watchresetForm(),
        watchaddPlan(),
        watchgetLists(),
        watchpushLists(),
        watchupdateLists(),
        // watchsetSelectedDate(),
        watchUp(),
    ])
        
}