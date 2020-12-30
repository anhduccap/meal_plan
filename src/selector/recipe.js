import { createSelector } from 'reselect'
const getRecipe = (state, field) => state.recipe[field];
export const getRecipeField=createSelector(
    [getRecipe],
    (data)=>data
)
