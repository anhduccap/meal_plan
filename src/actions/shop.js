export const Types ={
    getListRequest: "getlistrequest",
	getListSuccess: "getlistsuccess",
    getListFailure: "getlistfailure",
    changeFormField: "changeFormField",
    pushListRequest: "pushListrequest",
    updateListRequest: "updateListrequest",
	resetForm:"resetForm"
}
const resetForm=()=>{
    return{
        type:Types.resetForm
    }
}
const getList=()=>{
    return{
        type:Types.getListRequest
    }
}
const pushList=(form)=>{
    return{
        type:Types.pushListRequest,
        form
    }
}
const updateList=(form)=>{
    return{
        type:Types.updateListRequest,
        form
    }
}
const changeFormField=(key,value)=>{
    return{
        type:Types.changeFormField,
        key,
        value
    }
}

export default {
    getList,
    changeFormField,
    resetForm,
    pushList,
    updateList
}