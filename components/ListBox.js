const ListBox = (props)=>{
    return (<ul className={props.customClassName}>
        {props.children}
        </ul>
    )
}

export default ListBox;