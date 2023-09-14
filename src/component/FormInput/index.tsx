import { register } from "module"
import React from "react"
import { Form } from "react-bootstrap"

import styles from './style.module.scss'
interface IProps {
    name: string
    label: string
    type: string
    placeholder: string
    classes?: any
    register: any
}
const FormInput = (props: IProps) => {
    return (
        <>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                className={`${styles.formInput} ${props.classes}`}
                {...props.register(props.name)} />
        </>
    )
}

export default FormInput