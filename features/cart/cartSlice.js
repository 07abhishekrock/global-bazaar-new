import { createSlice } from '@reduxjs/toolkit'
import { addNewItemToCart, changeItemQty, getAllItemsOnCart, removeItemFromCart , changeItemTypeInLocalStorage } from '../../utils/localStorage';

const arrayHasItemWithAttributeValue = (array , attr_name , attr_value) => {
    return array.filter(array_item => array_item[attr_name] === attr_value)[0];
}


export const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        itemList : [],
        status : 0
    },
    reducers : {
        refreshCart : (state , action)=>{
            const new_product_list = action.payload;
            state.itemList = new_product_list;
        },
        idle : (state) => {
            state.status = 0;
        },
        loading : (state) => {
            state.status = 1;
        },
        completed : (state) => {
            state.status = 2;
        },
        completed_with_error : (state) => {
            state.status = -1;
        }
    }
})


export const addItemsToLocalStorage = (item) => (dispatch , getState) => {
    dispatch(loading());

    let new_item_list = [];
    let target_item = arrayHasItemWithAttributeValue(getState().cart.itemList , 'id' , item.id);

    if(target_item){
        if(target_item.type === item.type){
            new_item_list = changeItemQty(item.id , +target_item.qty + 1);
        }
        else{
            new_item_list = changeItemTypeInLocalStorage(item.id , item.type);
        }
    }
    else{
        new_item_list = addNewItemToCart(item);
    }

    dispatch(completed());
    dispatch(refreshCart(new_item_list));
}

export const removeItemFromLocalStorage = item_id => dispatch => {
    dispatch(loading());

    let new_item_list = [];
    new_item_list = removeItemFromCart(item_id);

    dispatch(completed());
    dispatch(refreshCart(new_item_list));
}

export const changeItemType = (item_id , new_type) => dispatch => {
    dispatch(loading());

    let new_item_list = [];
    new_item_list = changeItemTypeInLocalStorage(item_id , new_type);

    dispatch(completed());
    dispatch(refreshCart(new_item_list));
}

export const changeQty = (item_id , new_qty) => (dispatch , getState) => {
    dispatch(loading());

    let new_item_list = [];
    const state = getState().cart;
    const item = arrayHasItemWithAttributeValue(state.itemList , 'id' , item_id);
    if(item.type === 'cart'){
        new_item_list = changeItemQty(item_id , new_qty);
    }

    dispatch(completed());
    dispatch(refreshCart(new_item_list));
}

export const populateCartInitial = (itemList) => dispatch => {
    dispatch(loading());
    
    let new_item_list = getAllItemsOnCart();

    dispatch(completed());
    dispatch(refreshCart(new_item_list));
}

export const {refreshCart , loading , completed , idle , completed_with_error} = cartSlice.actions

export const selectItems = state => state.cart.itemList

export default cartSlice.reducer