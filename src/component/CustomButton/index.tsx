import React from "react"
import { Button } from "react-bootstrap"
import { ButtonVariant } from "react-bootstrap/esm/types"

import styles from './style.module.scss'

interface IProps {
    type: "submit" | "button" | "reset"
    variant: ButtonVariant
    classes?: any
    label: string
    onClick?: () => void
}
const CustomButton = (props: IProps) => {

    return (
        <>
            <Button variant={props.variant} type={props.type} className={`${styles.btn} ${props.classes}`} onClick={props.onClick} >
                {props.label}
            </Button>
        </>
    )
}

export default CustomButton