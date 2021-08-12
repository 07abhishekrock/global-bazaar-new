import styles from '../styles/cart.module.scss';
import { useDispatch , useSelector } from 'react-redux';
import { changeQty, removeItemFromLocalStorage } from '../features/cart/cartSlice';
import { changeItemType } from '../features/cart/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
const CartItem = (props)=>{
    const dispatch = useDispatch();
    const current_item = useSelector(state => state.cart.itemList.filter(item => item.id === props.id)[0]);

    return (
        <div className={styles['cart-item']} key={props.id}>
            <img className={styles['cart-image']} src={props.imageLink}/>
            <div className={styles['cart-item-info']}>
                <h2>{props.productName}</h2>
                <i>{props.extraInfo}</i>
                <span>Quantity <input type="number" value={current_item.qty}  onChange={(e)=>{
                    dispatch(changeQty(props.id , e.target.value));
                }}/></span>
                <div className={styles['price-info']}>
                    <span>Rs {props.newPrice * props.qty}</span>
                    <span>Rs {props.oldPrice * props.qty}</span>
                    <span special={"1"}>{Math.ceil((100 * (props.oldPrice - props.newPrice)) / (props.oldPrice))}% Off</span>
                </div>
                <div className={styles['cart-options']}>
                        <button onClick={()=>dispatch(changeItemType(props.id , props.type === 'cart' ? 'wishlist' : 'cart'))}>{props.type === 'cart' ? 'Move to Wishlist' : 'Move to Cart'}</button>
                        <button onClick={()=>dispatch(removeItemFromLocalStorage(props.id))}>Remove</button>
                </div>
            </div>
        </div>
    ) 
}

export const CartCarouselBlock = (props)=>{
    const dispatch = useDispatch();
    const current_item = useSelector(state => state.cart.itemList.filter(item => item.id === props.id)[0]);

    return <div className={styles['cart-carousel-block']}>
        <img src={props.imageLink}/>
        <h2>{props.productName}</h2>
        <div>
            <i onClick={()=>{
                dispatch(changeItemType(props.id , 'cart'));
            }}><FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon></i>
            <i onClick={()=>{
                dispatch(removeItemFromLocalStorage(props.id))
            }}
            ><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></i>
        </div>
    </div>
}


export default CartItem;