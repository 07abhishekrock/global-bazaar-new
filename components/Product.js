import { faCartPlus, faExternalLinkAlt, faExternalLinkSquareAlt, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/product.module.scss';


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
    return (
        <div className={styles['product']}>
            <div className={styles['product-options']}>
                <i><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></i>
                <i><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></i>
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