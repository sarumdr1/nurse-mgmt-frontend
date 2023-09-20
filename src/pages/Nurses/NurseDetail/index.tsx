import React, { useEffect, useState } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"

import PPImage from '../../../images/pp.png'
import BackImage from '../../../images/back.png'
import { get } from "../../../API/axios"
import CustomButton from "../../../component/CustomButton"
import routes from "../../../config/routes"
import { INurse } from "../../../interface/INurse"

import styles from './styles.module.scss'
const NurseDetail = () => {
    const navigate = useNavigate()
    const params = useParams()

    const [nurse, setNurse] = useState<INurse | null>(null)
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


    const handleEditNurse = () => {
        navigate(routes.editNurses.path(id?.toString() ?? ''))
    }
    return (
        <div className={styles.container}>
            <p className={styles.breadcrumb}>
                <img src={BackImage} className={styles.back} onClick={() => navigate(routes.nurses.path)} />  Nurse{nurse?.full_name && `/${nurse?.full_name}`}
            </p>
            <Row>
                <Col lg={3} >
                    <Card className={`${styles.card} ${styles.nameCard}`}>
                        <img src={PPImage} alt='pp' />
                        <p className={styles.fullName}>{nurse?.full_name}</p>
                        <p>{nurse?.email}</p>

                    </Card>
                </Col>
                <Col >
                    <Card className={styles.card}>
                        <Row>
                            <Col lg={7}>
                                <p className={styles.title}>Gender</p>
                                <p className={styles.title}>Contact Number</p>
                                <p className={styles.title}>Role</p>
                                <p className={styles.title}>Address</p>
                                <p className={styles.title}>Working Days</p>
                                <p className={styles.title}>Working Shift</p>
                                <p className={styles.title}> Duty Start Time</p>
                                <p className={styles.title}>Duty End Time</p>

                            </Col>
                            <Col>
                                <p>{nurse?.gender ?? '-'}</p>
                                <p>{nurse?.contact_number ?? '-'}</p>
                                <p>{nurse?.role ? nurse?.role : '-'}</p>
                                <p>{nurse?.address ?? '-'}</p>
                                <p>{nurse?.working_days ?? '-'}</p>
                                <p>{nurse?.working_shift ? nurse?.working_shift : '-'}</p>
                                <p>{nurse?.duty_start_time ?? '-'}</p>
                                <p>{nurse?.duty_end_time ?? '-'}</p>

                            </Col>
                        </Row>

                    </Card>
                </Col>
            </Row>
            <CustomButton type='button' label='Edit Nurse' variant='secondary' onClick={handleEditNurse} classes={styles.editBtn} />

        </div>
    )
}

export default NurseDetail