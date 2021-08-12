import styles from '../styles/misc.module.scss';


const DesignerHeading = (props)=>{
    return (
        <h2 className={styles['designer-heading']} noUnderline={props.underline === false ? "1" : "0"}>
            {props.children}
        </h2>
    )
}

export default DesignerHeading;