import styles from '../styles/navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faSearch, faShoppingCart, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import ComboBox from './ComboBox';
import ListBox from './ListBox';
import React from 'react';
import HoverBoxWithIcon from './HoverBoxWithIcon';


const Navbar = ()=>{
    return (
        <nav className={styles['navbar']}>
            <div className={styles['nav-logo']}></div>
            <div className={styles['search-bar']}>
                <ComboBox customClassName={styles['category-combo-box']}>
                    <>List Item 1</>
                    <>List Item 20000</>
                    <>List Item 3</>
                    <>List Item 4</>
                    <>List Item 5</>
                    <>List Item 6</>
                </ComboBox>
                    <div className={styles['search-field']}>
                        <input type="text" placeholder={"Start searching for your favourite items."}></input>
                        <i className={styles['search-icon']}><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></i>
                        <ListBox customClassName={styles['search-results-box']}>
                            <li>Search Result 1</li>
                            <li>Search Result 1</li>
                            <li>Search Result 1</li>
                            <li>Search Result 1</li>
                        </ListBox>
                    </div>
                </div>
                <div className={styles['nav-icon-links']}>
                    <FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon>
                    <HoverBoxWithIcon icon={faShoppingCart} customClassName={styles['cart-hover']}>
                        <span>4 items in your cart</span>
                        <button>Go to Cart</button>
                    </HoverBoxWithIcon>
                    <FontAwesomeIcon icon={faLayerGroup}></FontAwesomeIcon>
                </div>
        </nav>
    )
}

export default Navbar;