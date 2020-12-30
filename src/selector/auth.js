import { createSelector } from 'reselect'
const getField = (state, field) => state.auth.form[field]
export const getAuthField=createSelector(
    [getField],
    (data)=>data
)
