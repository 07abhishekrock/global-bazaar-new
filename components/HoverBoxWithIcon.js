import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from '../styles/misc.module.scss';

const HoverBoxWithIcon = (props)=>{

    let [visible , toggle_visible] = useState(false);

    return (
        <div className={props.parentClassName} style={{position:'relative'}}>
            {props.appendToTop || null}
            <span 
                onMouseEnter={()=>{
                    toggle_visible(true);
                }}
                onMouseLeave={()=>{
                    toggle_visible(false);
                }}
            className={styles['invisible-block']}></span>
            <i><FontAwesomeIcon icon={props.icon}></FontAwesomeIcon></i>
            <div onMouseEnter={()=>{
                toggle_visible(true);
            }} onMouseLeave={()=>{
                toggle_visible(false);
            }} style={{display: visible ? 'initial' : 'none' }} className={styles['hover-box'].concat(' ' , props.customClassName)}>{props.children}</div>
        </div>
    )
}

export default HoverBoxWithIcon;