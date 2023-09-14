import React from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import CustomButton from "../../../component/CustomButton";
import FormInput from "../../../component/FormInput";

import styles from './styles.module.scss'

interface IProps {
    onSubmit: (data: any) => void
}
const NurseForm = (props: IProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        // resolver: yupResolver(schema),
    });

    const onSubmit = (data: any) => {
        console.log(data)
        props?.onSubmit(data)
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <FormInput name='full_name' label="Full Name" type='text' placeholder='Enter full name' register={register} classes={styles.formInput} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <FormInput name='email' label="Email" type='email' placeholder='Enter your email address' register={register} classes={styles.formInput} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <FormInput name='contact_number' label="Contact Number" type='number' placeholder='Enter contact number' register={register} classes={styles.formInput} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <FormInput name='working_days' label="Working Days" type='text' placeholder='Enter working days' register={register} classes={styles.formInput} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <FormInput name='duty_start_time' label="Duty Start Time" type='text' placeholder='Enter duty start time' register={register} classes={styles.formInput} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <FormInput name='duty_end_time' label="Duty End Time" type='text' placeholder='Enter duty end time' register={register} classes={styles.formInput} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <FormInput name='address' label="Address" type='text' placeholder='Enter address' register={register} classes={styles.formInput} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Gender</Form.Label>
                <br />
                <select
                    // className="custom-select"
                    id="selectmethod"
                    defaultValue=""
                    {...register("gender", { required: true })}
                    className={`${styles.formInput} ${styles.gender}`}
                >
                    <option value="" disabled>Select Option</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                </select>
            </Form.Group>

            <CustomButton variant="primary" type="submit" label='Add Nurse' classes={styles.submitBtn} />

        </Form>
    )
}

export default NurseForm