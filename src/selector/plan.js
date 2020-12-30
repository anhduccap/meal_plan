
import { createSelector } from 'reselect'
const getPlan = (state, field) => state.plan[field];
export const getPlanField=createSelector(
    [getPlan],
    (data)=>data
)

// const getAllPlan=(state)=> state.plan["data"]

   
// const getdate=(state)=> state.plan.selectedDate
   
// export const getPlanByDate=createSelector(
//         [getAllPlan,getdate],
//         (data,selectedDate)=>data.filter(plan=>plan.dateString===selectedDate )
//     )
