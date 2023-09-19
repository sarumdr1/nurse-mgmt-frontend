import React, { useState, useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify";
import { get, put } from "../../../API/axios";
import routes from "../../../config/routes";

import NurseImg from '../../../images/nurse.svg'
import NurseForm from "../NurseForm";

import styles from '../AddNurse/styles.module.scss'

const EditNurse = () => {
    const navigate = useNavigate()
    const params = useParams()

    const [nurse, setNurse] = useState(null)

    const id = params.id
    useEffect(() => {
        get(`/nurse/${id}`)
            .then((response: any) => {
                setNurse(response.data)
            })
            .catch((err) => {
                toast.error("Something went failed.Please try again")
            })
    }, [id])
    console.log(nurse)
    const onSubmit = async (data: any) => {
        console.log(data)
        put(`/nurse/${id}`, data)
            .then((res: any) => {
                toast.success("Nurse updated successful");
                navigate(routes.nurses.path)
            })
            .catch((error: any) => {
                toast.error(
                    error?.response?.data?.message
                        ? error?.response?.data?.message
                        : "Something went wrong. Please try again."
                );
            });
    };

    if (!nurse) {
        return null
    }
    return (
        <Row className={styles.container}>
            <Col>
                <img src={NurseImg} alt='nurse' />
            </Col>
            <Col lg={8} className={styles.formCol}>
                <p className={styles.title}>Edit Nurses</p>
                <NurseForm onSubmit={onSubmit} data={nurse} btnTitle='Edit Nurse' />
            </Col>

        </Row>
    )
}

export default EditNurse