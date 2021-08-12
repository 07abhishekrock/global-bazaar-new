import styles from '../styles/misc.module.scss';
import Product from './Product';

const productData = {
    productName : 'Designer Bag',
    oldPrice : 1000,
    newPrice : 850,
    currency : 'Rs',
    id : '1000',
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
                    <Product {...productData} id="1001" />
                    <Product {...productData} id="1002" />
                    <Product {...productData} id="1003" />
                    <Product {...productData} id="1004" />
                    <Product {...productData} id="1005" />
                    <Product {...productData} id="1006" />
                </div>
            </div>
            {props.appendToEnd || null}
        </div>
    )
}


export default GridWithHighlight