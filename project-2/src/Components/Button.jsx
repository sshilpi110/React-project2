import React from 'react'
// import { MdMessage } from "react-icons/md"
import styles from "./Button.module.css"


const Button = ({isOutline,icon,text,...rest}) => {
    return (
        // {...rest}
        <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
            {/* <MdMessage/> */}
            {icon}
            {text}
        </button>
    )
}

export default Button
