
export const Types={
    getCategoriesRequest: "getcategoriesrequest",
	getCategoriesSuccess: "getcategoriessuccess",
    getCategoriesFailure: "getcategoriesfailure",
    
    Up:"Up"
}

const getCategories=()=>{
    return{
        type:Types.getCategoriesRequest
    }
}

const Up=(data)=>{
    return{
        type:Types.Up,
        data
    }
}

export default{
    getCategories,
    Up
    
}