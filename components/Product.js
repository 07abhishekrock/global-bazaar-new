import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
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
                {props.oldPrice && props.newPrice && (props.newPrice < props.oldPrice) ? <i className={styles['discount-percentage']}>-{((props.oldPrice - props.newPrice) * 100) / (props.oldPrice)}%</i> : null}
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
            </div>
            <img src={props.imageLink}/>
            <div className={styles['product-info']}>
                <span className={styles['price']}>
                    Rs {props.newPrice} <strike>Rs {props.oldPrice}</strike>
                </span>
                <span className={styles['product-name']}>
                    {props.productName}
                </span>
            </div>
        </div>
    )
}

export default Product;