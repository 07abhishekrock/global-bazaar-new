import styles from '../styles/navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes , faGripLines } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const icons = [faTimes , faGripLines]

const ListBoxIcon = (props)=>{

    let [icon , set_icon] = useState(1);

    return <div className={styles['list-box-icon'].concat(' ', props.customClassName)}>
        <i onClick={()=>{
            set_icon( (icon + 1) % 2 )
        }}><FontAwesomeIcon icon={icons[icon]}></FontAwesomeIcon></i>
        <div className={styles['list-inner']} style={{transform:`translateX(${-1 * 100 * icon}%)`}}>
            {props.children}
        </div>
    </div>    
}

export default ListBoxIcon;