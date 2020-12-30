export const Types = {
    getPlansRequest: "getplansrequest",
    getPlansSuccess: "getplanssuccess",
    completegetPlan:"completegetPlan",

    changeFormField: "changeformfield",
    setForm: "setform",
    resetForm:"resetform",

    pushItem: "pushItem",
    removeItem: "removeItem",

    setPlan: "setplan",
    addPlan: "addplan",

    setSelectDate:"setSelectDate",
    setSelectDateSuccess:"setSelectDateSuccess"
};
const pushItem = (recipe, key)=> {
	return{
        type:Types.pushItem,
        recipe,
        key
    }
};
const removeItem = (recipe, key)=> {
	return{
        type:Types.removeItem,
        recipe,
        key
    }
};
const getPlan=()=>{
    return {
        type:Types.getPlansRequest,
    }  
}
const setPlan=(form)=>{
    return{
        type:Types.setPlan,
        form
    }
}
const addPlan=(form)=>{
    return{
        type:Types.addPlan,
        form
    }
}
const completeGetPlan=()=>{
    return{
        type:Types.completegetPlan
    }
}
const changeFormField=(key,value)=>{
    return{
        type:Types.changeFormField,
        key,
        value
    }
}
const setForm=(formData)=>{
    return{
        type:Types.setForm,
        formData
    }
}

const resetForm=(dateString)=>{
    return {
        type:Types.resetForm,
        dateString
    }
}
// const setSelectDate=(selectedDate)=>{
//     return{
//         type:Types.setSelectDate,
//         selectedDate
//     }
// }
export default {
    getPlan,
    setForm,
    changeFormField,
    resetForm,
    completeGetPlan,
    pushItem,
    removeItem,
    setPlan,
    addPlan,
    // setSelectDate
} 