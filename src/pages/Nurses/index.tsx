import React, { useEffect } from "react"
import { useState } from "react"
import { Table } from "react-bootstrap"
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom';

import { get } from "../../API/axios"

import { INurse } from "../../interface/INurse"

import CustomButton from '../../component/CustomButton/index';
import NoDataFound from "../../component/NoDataFound"

import styles from './styles.module.scss'
import routes from "../../config/routes";


const Nurses = () => {
    const navigate = useNavigate()

    const [nurses, setNurses] = useState([])

    useEffect(() => {
        get('/nurses')
            .then((response) => {
                setNurses(response.data)
            })
            .catch((err) => {
                toast.error("Something went failed.Please try again")
            })
        return () => { }
    }, [])

    const tableBody = nurses?.map((nurse: INurse, index: number) => (
        <tr key={nurse.ID}>
            <td>{index + 1}</td>
            <td>{nurse.full_name}</td>
            <td>{nurse.email}</td>
            <td>{nurse.contact_number}</td>
            <td>{nurse.working_days}</td>
            <td>{nurse.working_shift ?? '-'}</td>
            <td>{nurse.duty_start_time}</td>
            <td>{nurse.duty_end_time}</td>
            <td>{nurse.address}</td>
            <td>{nurse.gender}</td>
        </tr>
    ))

    const handleAddNurse = () => {
        navigate(routes.addNurses.path)
    }
    return (
        <div className={styles.container}>
            <div className={styles.headerDiv}>
                <p className={styles.title}> Nurses</p>
                <CustomButton type='button' label='Add Nurse' variant='secondary' onClick={handleAddNurse} />
            </div>
            <Table striped>
                <thead>
                    <tr>
                        <th>S.N</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th>Working Days</th>
                        <th>Working Shift</th>
                        <th>Duty Start Time</th>
                        <th>Duty End Time</th>
                        <th>Address</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    {
                        nurses?.length ?
                            tableBody
                            :
                            <div className={styles.noDataFoundDiv}>
                                <NoDataFound />
                            </div>
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Nurses