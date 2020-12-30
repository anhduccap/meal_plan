import firebase_auth from '@react-native-firebase/auth'
import firebase_firestore from '@react-native-firebase/firestore'
import {Types} from '../actions/auth'
import {
    put,
    takeEvery,
} from 'redux-saga/effects'
function* loginwithEmail(action){
        try{
            const res= yield firebase_auth().signInWithEmailAndPassword(action.email,action.password)
            const user=res.user.toJSON()
            yield put({type:Types.loginSuccess})
            yield put({type:Types.getUser,uid:user.uid})
            yield put({type:Types.resetForm})
        }
        catch(err){
            yield put({type:Types.loginFail,error:"auth/wrong-password"})
        } 
}
function* registerwithEmail(action){
    try{
      
        const res=yield firebase_auth().createUserWithEmailAndPassword(action.email,action.password)
        const user=res.user.toJSON()
        const userData = {
			uid: user.uid,
			email: user.email,
			phoneNumber: user.phoneNumber,
			photoURL: user.photoURL,
			displayName: username
        }
        yield put({type:Types.registerSuccess})
        yield put({type:Types.resetForm})
    }
    catch(err){
        yield put({type:Types.registerFail,error:err})
    }
}
function* getUser(action){
    try{
        const user=yield firebase_firestore()
            .collection("User")
            .doc(action.uid)
            .get()
        yield put({type:Types.getUserSuccess,user:user.data()})
    }
    catch(err){
        yield put({type:Types.getUserFail,error:err})
    }
}

export function*watchloginwithEmail(){
    yield takeEvery(Types.loginRequest,loginwithEmail)
}

export function*watchregisterwithEmail(){
    yield takeEvery(Types.registerRequest,registerwithEmail)
}

export function*watchgetUser(){
    yield takeEvery(Types.getUser,getUser)
}
