import React from "react"
import { Col, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { post } from "../../../API/axios";
import routes from "../../../config/routes";

import NurseImg from '../../../images/nurse.svg'
import NurseForm from "../NurseForm";

import styles from './styles.module.scss'

const AddNurse = () => {
    const navigate = useNavigate()

    const onSubmit = async (data: any) => {
        console.log(data)
        post("/nurse", data)
            .then((res: any) => {
                toast.success("Nurse added successful");
                navigate(routes.nurses.path)
            })
            .catch((error: any) => {
                toast.error(
                    error?.response?.data?.message
                        ? error?.response?.data?.message
                        : error?.data?.message?.password
                            ? error?.data?.message?.password?.[0]
                            : "Something went wrong. Please try again."
                );
            });
    };
    return (
        <Row className={styles.container}>
            <Col>
                <img src={NurseImg} alt='nurse' />
            </Col>
            <Col lg={8} className={styles.formCol}>
                <p className={styles.title}>Add New Nurses</p>
                <NurseForm onSubmit={onSubmit} btnTitle='Add Nurse' />
            </Col>

        </Row>
    )
}

export default AddNurse