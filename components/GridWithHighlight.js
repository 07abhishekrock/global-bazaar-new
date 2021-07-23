import styles from '../styles/misc.module.scss';
import Product from './Product';

const productData = {
    productName : 'Designer Bag',
    oldPrice : 1000,
    newPrice : 850,
    currency : 'Rs',
    productId : '1000',
    imageLink : 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80'
}

const GridWithHighlight = (props)=>{
    return (
        <div className={styles['grid-with-highlight-wrapper']}>
            {props.children}
            <div className={styles['grid-with-highlight']}>
                <div className={styles['highlight']}>
                    <Product {...productData}/>
                </div>
                <div className={styles['grid']}>
                    <Product {...productData}/>
                    <Product {...productData}/>
                    <Product {...productData}/>
                    <Product {...productData}/>
                    <Product {...productData}/>
                </div>
            </div>
        </div>
    )
}


export default GridWithHighlight