import React, { useEffect } from "react"
import { useState } from "react"
import { Table } from "react-bootstrap"
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom';

import { deletes, get } from "../../API/axios"

import { INurse } from "../../interface/INurse"

import CustomButton from '../../component/CustomButton/index';
import NoDataFound from "../../component/NoDataFound"

import EditImg from '../../images/edit.svg'
import DeleteImg from '../../images/delete.svg'
import styles from './styles.module.scss'
import routes from "../../config/routes";


const Nurses = () => {
    const navigate = useNavigate()

    const [refresh, setRefresh] = useState(false)
    const [nurses, setNurses] = useState([])

    useEffect(() => {
        get('/nurses')
            .then((response) => {
                setNurses(response.data)
                setRefresh(false)
            })
            .catch((err) => {
                toast.error("Something went failed.Please try again")
            })
    }, [refresh])

    const handleEdit = (id: number) => {
        navigate(routes.editNurses.path(id.toString()))
    }

    const handleDelete = (id: number) => {
        deletes(`/nurse/${id}`)
            .then((res: any) => {
                toast.success("Nurse deleted successful");
                setRefresh(true)
            })
            .catch((error: any) => {
                toast.error(
                    error?.response?.data?.message
                        ? error?.response?.data?.message
                        : "Something went wrong. Please try again."
                );
            });
    }
    const tableBody = nurses?.map((nurse: INurse, index: number) => (
        <tr key={nurse.ID} className={styles.tr}>
            <td className={styles.td}> {index + 1}</td>
            <td className={styles.td}>{nurse.full_name}</td>
            <td className={styles.td}>{nurse.email}</td>
            <td className={styles.td}>{nurse.contact_number}</td>
            <td className={styles.td}>{nurse.working_days}</td>
            <td className={styles.td}>{nurse.working_shift ?? '-'}</td>
            <td className={styles.td}>{nurse.duty_start_time}</td>
            <td className={styles.td}>{nurse.duty_end_time}</td>
            <td className={styles.td}>{nurse.address}</td>
            <td className={styles.td}>{nurse.gender}</td>
            <td className={styles.td} >
                <img
                    src={EditImg}
                    width='20px'
                    alt='Edit'
                    onClick={() => handleEdit(nurse.ID)}
                    className={styles.editIcon}
                />
                <img
                    src={DeleteImg}
                    width='20px'
                    alt='Delete'
                    onClick={() => handleDelete(nurse.ID)}

                />
            </td>
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
                <thead className={styles.thead}>
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