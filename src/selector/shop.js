
import { createSelector } from 'reselect'
const getShop = (state, field) => state.shop[field];
export const getShopField=createSelector(
    [getShop],
    (data)=>data
)