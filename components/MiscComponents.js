import { faClock } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from '../styles/misc.module.scss';

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
            alignItems:props.align || 'center',
            justifyContent:props.justify || 'center'
        }}>
            {props.children}
        </div>
    )
}

export default Timer;
export {FlexWrapper}