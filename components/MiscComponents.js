import { faClock } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect , useState} from "react";
import styles from '../styles/misc.module.scss';

const ButtonWithBoxShadow = (props)=>{
    return (
        <div className={props.customClassName} style={{
            borderRadius:'0.3em',
            boxShadow : "0px 0px 20px 5px rgba(0,0,0,0.1)",
            backgroundColor : props.bg,
            color : props.color
        }}>
            {props.children}
        </div>
    )
}

const Timer = (props)=>{
    return (
        <div className={styles['timer-flex']}>
            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
            <div className={styles['timer']}>

                <span className={styles['time-unit']}>24</span>
                <span className={styles['time-seperator']}>:</span>

                <span className={styles['time-unit']}>30</span>
                <span className={styles['time-seperator']}>:</span>

                <span className={styles['time-unit']}>30</span>

            </div>
        </div>
    )
}

const FlexWrapper = (props)=>{
    
    return (
        <div style={{
            display:'flex',
            flexDirection : props.flow || 'row',
            alignItems : props.align || 'center',
            justifyContent : props.justify || 'center'
        }} className={props.customClassName}>
            {props.children}
        </div>
    )
}

export default Timer;
export {FlexWrapper , ButtonWithBoxShadow}