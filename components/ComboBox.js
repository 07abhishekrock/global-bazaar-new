import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";

const ComboBox = (props)=>{

    const [current_selected , set_current_selected] = useState(0);
    const [visible , toggle_visible] = useState(0);
    
    return(
        <div visible={visible} className={props.customClassName}>
            <span onClick={()=>{
                toggle_visible((visible + 1) % 2);
            }}>{Array.from(props.children)[current_selected]} <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></span>
            <ul onMouseLeave={()=>{
                toggle_visible(0);
            }}>
                {Array.from(props.children).map((element , index)=>{
                    if(index !== current_selected){
                        let id = uuidv4();
                        return <li key={id} onClick={()=>{
                            set_current_selected(index);
                            toggle_visible(0);
                        }}>{element}</li>
                    }
                    return null;
                })}
            </ul>
        </div>
    )
}

export default ComboBox;