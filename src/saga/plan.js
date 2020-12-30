import {
    put,
    takeEvery,
} from 'redux-saga/effects'
import {Types} from '../actions/plan'
import firebase_firestore from '@react-native-firebase/firestore'
import firebase_auth from '@react-native-firebase/auth'
function* getPlans(){
    let listPlan=[]
    yield firebase_firestore()
        .collection("Plans")
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                if (documentSnapshot.data().ref===firebase_auth().currentUser.uid){
                    listPlan.push(documentSnapshot.data())
                }
            });
          });
    yield put({type:Types.getPlansSuccess,data:listPlan})
}

function* addPlan(action){
    console.log("add Plan")
    yield firebase_firestore()
        .collection('Plans')
        .add({
            Id:"0",
            ref:action.form.ref,
            dateString:action.form.dateString,
            breakfast: action.form.breakfast,
		    lunch: action.form.lunch,
		    dinner: action.form.dinner
        })
    let Id_plan=""
    yield firebase_firestore()
        .collection('Plans')
        .get()
        .then(querySnapshot=>{
            querySnapshot.forEach(documentSnapshot=>{
                if (documentSnapshot.data().Id==="0"){
                    Id_plan=documentSnapshot.id
                }
            })
        })
    yield firebase_firestore()
        .collection('Plans')
        .doc(Id_plan)
        .update({
            'Id':Id_plan,
            'ref':firebase_auth().currentUser.uid,
        })
    yield put({type:Types.getPlansRequest})
}
function* setPlan(action){
    console.log("set Plan")
    if (
        action.form.breakfast.length ===0
        && action.form.lunch.length ===0
        && action.form.dinner.length ===0
        ){
            yield firebase_firestore()
                .collection("Plans")
                .doc(action.form.Id)
                .delete()
        }
    else {
        yield firebase_firestore()
        .collection("Plans")
        .doc(action.form.Id)
        .set(action.form)  
    }
   
    yield put({type:Types.getPlansRequest})
}
function* resetForm(action){
    let plantemp={
		dateString: action.dateString,
		breakfast: [],
		lunch: [],
		dinner: []
    }
    yield put({type:Types.setForm,formData:plantemp})
}
// function *setSelectedDate(action){
//     yield put({type:Types.setSelectDateSuccess,selectedDate:action.selectedDate})
// }
export function* watchgetPlans(){
    yield takeEvery(Types.getPlansRequest,getPlans)
}
export function* watchsetPlan(){
    yield takeEvery(Types.setPlan,setPlan)
}
export function* watchaddPlan(){
    yield takeEvery(Types.addPlan,addPlan)
}
export function* watchresetForm(){
    yield takeEvery(Types.resetForm,resetForm)
}
// export function* watchsetSelectedDate(){
//     yield takeEvery(Types.setSelectDate,setSelectedDate)
// }

