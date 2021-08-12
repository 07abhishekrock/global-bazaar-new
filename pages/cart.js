import styles from '../styles/cart.module.scss';
import { useEffect, useState } from 'react';
import CartList from '../components/CartList';
import { useSelector , useDispatch } from 'react-redux';
import { changeItemType, selectItems } from '../features/cart/cartSlice';
import { removeItemFromLocalStorage } from '../features/cart/cartSlice';
import { CartCarouselBlock } from '../components/CartItem';
import { CarouselMultipleSlidesOnOnePage } from '../components/Carousel';


const Cart = (props)=>{

    const [total_price , set_total_price] = useState(0);
    const dispatch = useDispatch();
    const itemList = useSelector(selectItems);


    const getTotalPrice = ()=>{
        return itemList.reduce((total_price = 0 , current_item)=>{
            if(current_item.type === 'cart'){
                total_price += current_item.qty * current_item.newPrice;
            }
            return total_price;
        },0)
    }
    useEffect(()=>{
        set_total_price(getTotalPrice()); 
    },[itemList])

    return (
        <>
        <div className={styles['cart-wrapper']}>
            <div className={styles['cart-window-wrapper']}>
                <CartList title={"Your Cart"} list={itemList.filter((item)=>item.type === 'cart')} listType={'cart'}
                buttons={
                    <>
                        <button onClick={()=>dispatch(changeItemType(props.id , 'wishlist'))}>Save For Later</button>
                        <button onClick={()=>dispatch(removeItemFromLocalStorage(props.id))}>Remove</button>
                    </>
                }>
                </CartList>

            </div>
                <div className={styles['cart-checkout']}>
                    <h1>Price Details</h1>
                    <ul>
                        <li>Total Price<i>Rs {total_price}</i></li>
                        <li>Delivery Charges<i>{"Free"}</i></li>
                    </ul>
                    <h3>Total Charges<i>Rs {total_price}</i></h3>
                    <button>Buy All Items</button>
                </div>

        </div>
        {itemList && itemList.filter(item => item.type === 'wishlist').length > 0 ? 
                <CarouselMultipleSlidesOnOnePage
                    heading={"Your Wishlist"}
                    underline={false}
                    padding={"2em"}
                    breakpoints = {{
                    "@0.00": {
                        "slidesPerView": 1,
                        "spaceBetween": 10
                    },
                    "@0.65": {
                        "slidesPerView": 2,
                        "spaceBetween": 20
                    },
                    "@1.00": {
                        "slidesPerView": 3,
                        "spaceBetween": 40
                    },
                    "@1.50": {
                        "slidesPerView": 4,
                        "spaceBetween": 50
                        }
                    }
                    }  
                    >
                    {itemList.map((item)=>{
                        if(item.type === 'wishlist'){
                            return <CartCarouselBlock key={item.id} {...item}/>
                        }
                        return null;
                    })}    
                </CarouselMultipleSlidesOnOnePage> : null
                }

        </>
    )
}

export async function getStaticProps(context){
    return{
        props:{
            cartItems : [
                {
                    id:100,
                    imageURL : 'https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80',
                    newPrice : 10000,
                    oldPrice : 12000,
                    qty : 2,
                    itemName : 'Iphone 4GB RAM',
                    extraInfo : 'Phones and Accessories',
                },
                {
                    id:102,
                    imageURL : 'https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80',
                    newPrice : 10000,
                    oldPrice : 12000,
                    qty : 1,
                    itemName : 'Iphone 4GB RAM',
                    extraInfo : 'Phones and Accessories',
                },
                {
                    id:103,
                    imageURL : 'https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80',
                    newPrice : 10000,
                    oldPrice : 12000,
                    qty : 1,
                    itemName : 'Iphone 4GB RAM',
                    extraInfo : 'Phones and Accessories',
                },
                {
                    id:104,
                    imageURL : 'https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=659&q=80',
                    newPrice : 10000,
                    oldPrice : 12000,
                    qty : 1,
                    itemName : 'Iphone 4GB RAM',
                    extraInfo : 'Phones and Accessories',
                },
            ]
        }
    }
}

export default Cart;