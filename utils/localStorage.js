export const getAllItemsOnCart = ()=>{
    const all_items_string = localStorage.getItem('cart');
    let all_items = [];
    if(all_items_string){
        all_items = JSON.parse(all_items_string);
    }
    return all_items;
}

export const refreshItemsOnCart = (itemList)=>{
    const item_list_string = JSON.stringify(itemList);
    localStorage.setItem('cart',item_list_string);
    return itemList;
}

export const addNewItemToCart = (item)=>{
    const all_items = getAllItemsOnCart();
    const final_item_list = [...all_items , item];
    return refreshItemsOnCart(final_item_list);
}

export const changeItemTypeInLocalStorage = (item_id , new_type)=>{
    const all_items = getAllItemsOnCart();
    let final_item_list = all_items.map((item)=>{
        console.log('before',item.type,item.id , item_id);
        if(item_id === item.id){
            if(new_type !== item.type){
                item.type = new_type;
            }
        }
        return item;
    })
    return refreshItemsOnCart(final_item_list);
}

export const changeItemQty = (target_item_id , new_qty)=>{
    const all_items = getAllItemsOnCart();
    const new_items_list = all_items.map((item) => {
        if(item.id == target_item_id){
            if(new_qty <= item.maxQty && new_qty > 0){
                item.qty = new_qty;
            }
        }
        return item;
    })
    return refreshItemsOnCart(new_items_list);
}

export const removeItemFromCart = (target_item_id)=>{
    const all_items = getAllItemsOnCart();
    const new_items_list = all_items.filter((item) => item.id !== target_item_id);
    return refreshItemsOnCart(new_items_list);
}