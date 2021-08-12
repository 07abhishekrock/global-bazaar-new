import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/cart.module.scss';
import CartItem from './CartItem';
const CartList = (props)=>{
    return <div className={styles['cart-window']}>
        <h1>{props.title}</h1>
        <div className={styles['cart-list']}>
            {props.list.length > 0 ? props.list.map((list_item)=>{
                return <CartItem {...list_item} key={list_item.id} buttons={props.buttons}/>
            }) : <div className={styles['empty-list-fallback']}>
                    <FontAwesomeIcon icon={faBoxOpen}></FontAwesomeIcon> 
                    <h3>Nothing to See Here ...</h3>
                </div>}
        </div>
        </div>
}

export default CartList;