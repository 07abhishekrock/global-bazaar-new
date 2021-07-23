import styles from '../styles/misc.module.scss';


const DesignerHeading = (props)=>{
    return (
        <h2 className={styles['designer-heading']}>
            {props.children}
        </h2>
    )
}

export default DesignerHeading;