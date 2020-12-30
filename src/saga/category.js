import {
    put,
    takeEvery,
} from 'redux-saga/effects'
import {Types} from '../actions/category'
import firebase_firestore from '@react-native-firebase/firestore'
function* getCategories(){
    try {
            console.log("Categoties Request")
            let listCategories=[]
            yield firebase_firestore()
                .collection("Categories")
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(documentSnapshot => {
                        listCategories.push(documentSnapshot.data());
                    });
                  });
            console.log("Categoties Success")
            yield put({type:Types.getCategoriesSuccess,categories:listCategories})
          
           
    }
    catch(err){
            console.log("Categoties Fail")
            yield put({type:Types.getCategoriesFailure,error:err})
    }
}


function* Up(action){
    e=action.data
        yield firebase_firestore()
        .collection('Recipes')
        .add({
            Id:"0",
            Category:e.Category,
            Image:e.Image,
            name: e.name,
            Servings:1,
            Ingredients: e.Ingredients,
            Description:e.Description,
            CookingTime:e.CookingTime
        })
    let Id_recipes=""
    yield firebase_firestore()
        .collection('Recipes')
        .get()
        .then(querySnapshot=>{
            querySnapshot.forEach(documentSnapshot=>{
                if (documentSnapshot.data().Id==="0"){
                    Id_recipes=documentSnapshot.id
                }
            })
        })
    yield firebase_firestore()
        .collection('Recipes')
        .doc(Id_recipes)
        .update({
            'Id':Id_recipes,
        })
   
   
}
export function* watchgetCategories(){
    yield takeEvery(Types.getCategoriesRequest,getCategories)
} 

export function* watchUp(){
    yield takeEvery(Types.Up,Up)
} 