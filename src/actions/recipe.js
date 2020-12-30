export const Types_recipe={
    getRecipeRequest: "getReciperequest",
	getRecipeSuccess: "getRecipesuccess",
    getRecipeFailure: "getRecipefailure",
    
    setUserLike: "setuserlike",
	toggleUserLike: "toggleuserlike",
}

const getRecipe=()=>{
    return{
        type:Types_recipe.getRecipeRequest
    }
}

const setUserLike=(item)=>{
    return{
        type:Types_recipe.setUserLike,
        item
    }
}

export default{
    getRecipe,
    setUserLike,
}