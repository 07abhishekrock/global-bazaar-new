import styles from '../styles/navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faSearch, faShoppingBasket, faShoppingCart, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import ComboBox from './ComboBox';
import Link from 'next/link';
import ListBox from './ListBox';
import React, { useEffect , useRef , useState } from 'react';
import HoverBoxWithIcon from './HoverBoxWithIcon';
import ListBoxIcon from './ListBoxIcon';


const Navbar = ()=>{

    let intersection_ref = useRef(null);
    let [fixed , set_fixed] = useState(0);
    let parent = useRef(null);

    useEffect(()=>{
        let new_intersection_observer = new IntersectionObserver((entries)=>{
            let entry = entries[0];
            console.log(entry.isIntersecting , entry.intersectionRatio);
            if(entry.isIntersecting){
                set_fixed(0);
            }
            else{
                set_fixed(1);
            }
        },{
            root : null,
            threshold : [0 , 0.1 , 0.2 , 0.3 , 0.4 , 0.5 , 0.6 , 0.7 , 0.8 , 0.9 , 1]
        })

        new_intersection_observer.observe(parent.current);
        intersection_ref.current = new_intersection_observer;

    },[])

    return (
        <>
        <div ref={parent} style={{height:'0.1em'}}></div>
        <nav className={styles['navbar']} fixed={fixed} style={{transform:'translateY(-0.1em)'}}>
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
                            <div className={styles['inline-categories']}>
                                <span selected={"1"}>Category 1</span>
                                <span>Category 1</span>
                                <span>Category 1</span>
                                <span>Category 1</span>
                            </div>
                            <li>Search Result 1</li>
                            <li>Search Result 1</li>
                            <li>Search Result 1</li>
                            <li>Search Result 1</li>
                        </ListBox>
                    </div>
                </div>
                <div className={styles['nav-icon-links']}>
                    <HoverBoxWithIcon icon={faUserAlt} 
                        parentClassName={styles['small-screen-invisible']}
                        customClassName={styles['option-hover'].concat(' ',styles['list-option'])}>
                        <ul>
                            <li>Your Profile</li>
                            <li>Your Orders</li>
                            <li>Your Cart</li>
                            <li>Your Wishlist</li>
                            <li>Feedback</li>
                        </ul>
                    </HoverBoxWithIcon>
                    <HoverBoxWithIcon appendToTop={<i className={styles['notif-bubble']}></i>} icon={faShoppingCart} customClassName={styles['option-hover']}>
                        <span>4 items in your cart</span>
                        <button>Go to Cart</button>
                    </HoverBoxWithIcon>
                    <HoverBoxWithIcon icon={faLayerGroup} 
                        parentClassName={styles['small-screen-invisible']}
                        customClassName={styles['option-hover'].concat(' ',styles['list-option'])}>
                        <ul>
                            <li>Help & Support</li>
                            <li>Advertise With Us</li>
                            <li>Sell on Flipkart</li>
                            <li>Admin Panel</li>
                            <li>Other Option</li>
                        </ul>
                    </HoverBoxWithIcon>
                    <ListBoxIcon customClassName={styles['disable-on-large-screens']}>
                        <h1>GlobalBazaar</h1>
                        <h3><FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>First</h3>
                        <ul>
                            <Link href={"/"}>Option 1</Link>
                            <Link href={"/"}>Option 1</Link>
                            <Link href={"/"}>Option 1</Link>
                            <Link href={"/"}>Option 1</Link>
                            <Link href={"/"}>Option 1</Link>
                        </ul>
                        <h3><FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>Second</h3>
                        <ul>
                            <Link href={"/"}>Option 1</Link>
                            <Link href={"/"}>Option 1</Link>
                            <Link href={"/"}>Option 1</Link>
                            <Link href={"/"}>Option 1</Link>
                            <Link href={"/"}>Option 1</Link>
                        </ul>
                        <h3><Link href="/">Logout</Link></h3>
                    </ListBoxIcon>
                </div>
        </nav>
        </>
    )
}

export default Navbar;