import { createSelector } from 'reselect'
const getField = (state, field) => state.category[field]

export const getCategoryField=createSelector(
    [getField],
    (data)=>data
)
