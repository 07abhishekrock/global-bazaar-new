import { faCartPlus, faExternalLinkAlt, faExternalLinkSquareAlt, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/product.module.scss';
import { useDispatch } from 'react-redux';
import {
    addItemsToLocalStorage
} from '../features/cart/cartSlice';


/*
typical product structure
    product Name
    oldPrice
    newPrice
    TimeLeftOnPrice
    productId
    imageLink
    viewLink

    --optional Params
    category
*/

const Product = (props)=>{

    const dispatch = useDispatch();
    return (
        <div className={styles['product']}>
            <div className={styles['product-options']}>
                <i onClick={()=>{
                    dispatch(addItemsToLocalStorage({
                        id : props.id,
                        newPrice : props.newPrice,
                        oldPrice : props.oldPrice,
                        productName : props.productName,
                        TimeLeftOnPrice : props.TimeLeftOnPrice || 0,
                        imageLink : props.imageLink ,
                        viewLink : props.viewLink || '#no-link',
                        maxQty : props.maxQty || 100,
                        qty : 1,
                        type : 'wishlist'
                    }));                   
                }}><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></i>
                <i onClick={()=>{
                    dispatch(addItemsToLocalStorage({
                        id : props.id,
                        newPrice : props.newPrice,
                        oldPrice : props.oldPrice,
                        productName : props.productName,
                        TimeLeftOnPrice : props.TimeLeftOnPrice || 0,
                        imageLink : props.imageLink ,
                        viewLink : props.viewLink || '#no-link',
                        maxQty : props.maxQty || 100,
                        qty : 1,
                        type : 'cart'
                    }));
                }}><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></i>
            </div>
            <img src={props.imageLink}/>
            <div className={styles['product-info']}>
                <span className={styles['price']}>
                    Rs {props.newPrice} <strike>Rs {props.oldPrice}</strike> 
                    {props.oldPrice && props.newPrice && (props.newPrice < props.oldPrice) ? <i className={styles['discount-percentage']}>{((props.oldPrice - props.newPrice) * 100) / (props.oldPrice)}% Off</i> : null} 
                </span>
                <span className={styles['product-name']}>
                    {props.productName}
                </span>
            </div>
        </div>
    )
}

const LoadMoreBlock = (props)=>{
    return (
        <div className={styles['load-more-block']}>
            <FontAwesomeIcon icon={faExternalLinkSquareAlt}></FontAwesomeIcon>
            <span>{props.text || 'Options'}</span>
        </div>
    ) 
}

export default Product;
export {LoadMoreBlock};