import {Types} from '../actions/shop'
import firebase_firestore from '@react-native-firebase/firestore'
import firebase_auth from '@react-native-firebase/auth'
import {
    put,
    takeEvery,
} from 'redux-saga/effects'

function* getList(){
	try{
        console.log("Lists Request")
        let listshop=[]
        yield firebase_firestore()
            .collection("Lists")
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
					if (documentSnapshot.data().ref===firebase_auth().currentUser.uid)
                    	listshop.push(documentSnapshot.data());
                });
              });
		console.log("Lists Success")
        yield put({type:Types.getListSuccess,data:listshop})
    }
    catch(err){
        console.log("Lists Fail")
        yield put({type:Types.getListFailure,error:err})
    }  
}
function* pushList(action){
    console.log("push List")
    yield firebase_firestore()
        .collection('Lists')
        .add({
            Id:"0",
            ref:"",
            ingredients:action.form.ingredients,
            name:action.form.name,
            note:action.form.note,
            createAt: new Date()
        })
    let Id_List=""
    yield firebase_firestore()
        .collection('Lists')
        .get()
        .then(querySnapshot=>{
            querySnapshot.forEach(documentSnapshot=>{
                if (documentSnapshot.data().Id==="0"){
                    Id_List=documentSnapshot.id
                }
            })
        })
    yield firebase_firestore()
        .collection('Lists')
        .doc(Id_List)
        .update({
            'Id':Id_List,
            'ref':firebase_auth().currentUser.uid,
        })
    yield put({type:Types.getListRequest})
}

function* updateList(action){
    console.log("update List")
    yield firebase_firestore()
        .collection("Lists")
        .doc(action.form.Id)
        .update({
            ingredients:action.form.ingredients,
            name:action.form.name,
            note:action.form.note,
            createAt: new Date()
        })  
    yield put({type:Types.getListRequest})
}
export function* watchgetLists(){
    yield takeEvery(Types.getListRequest,getList)
}

export function* watchpushLists(){
    yield takeEvery(Types.pushListRequest,pushList)
}

export function* watchupdateLists(){
    yield takeEvery(Types.updateListRequest,updateList)
}