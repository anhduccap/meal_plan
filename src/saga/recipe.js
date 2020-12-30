import {Types_recipe} from '../actions/recipe'
import {Types} from '../actions/auth'
import firebase_firestore from '@react-native-firebase/firestore'
import firebase_auth from '@react-native-firebase/auth'
import {
    put,
    takeEvery,
} from 'redux-saga/effects'

function*getRecipes(){
    try{
        console.log("Recipes Request")
        let listRecipes=[]
        yield firebase_firestore()
            .collection("Recipes")
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    listRecipes.push(documentSnapshot.data());
                });
              });
        console.log("Recipes Success")
        yield put({type:Types_recipe.getRecipeSuccess,recipes:listRecipes})
    }
    catch(err){
        console.log("Recipes Fail")
        yield put({type:Types_recipe.getRecipeFailure,error:err})
    }  
}

function* setUserLike(action){
    const account=yield firebase_firestore().collection("User").doc(firebase_auth().currentUser.uid).get()
    listcookbook=account.data().Cookbook
    if (listcookbook.includes(action.item.Id)){
        listcookbook.splice(
            listcookbook.findIndex(recipeId=>recipeId === action.item.Id),1
        )
    }
    else{
        listcookbook.push(action.item.Id)
    }
    yield firebase_firestore()
        .collection("User")
        .doc(firebase_auth().currentUser.uid)
        .update({
            'Cookbook':listcookbook,
        })
    yield put({type:Types.getUser,uid:firebase_auth().currentUser.uid})

}
export function* watchgetRecipes(){
    yield takeEvery(Types_recipe.getRecipeRequest,getRecipes)
} 

export function* watchsetUserLike(){
    yield takeEvery(Types_recipe.setUserLike,setUserLike)
}