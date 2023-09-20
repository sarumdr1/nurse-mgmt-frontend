import React from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import CustomButton from "../../../component/CustomButton";
import FormInput from "../../../component/FormInput";

import styles from './styles.module.scss'

interface IProps {
    onSubmit: (data: any) => void
    data?: any
    btnTitle: string
}
const NurseForm = (props: IProps) => {
    const data = props?.data
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        // resolver: yupResolver(schema),
        defaultValues: data
    });

    const onSubmit = (data: any) => {
        props?.onSubmit(data)
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <FormInput
                    name='full_name'
                    label="Full Name"
                    type='text'
                    placeholder='Enter full name'
                    register={{ ...register("full_name", { required: "Full Name required" }) }}
                    classes={styles.formInput} />
                {errors.full_name &&
                    <p className='error-message'>{errors?.full_name?.message as string}</p>
                }
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <FormInput
                    name='email'
                    label="Email"
                    type='email'
                    placeholder='Enter your email address'
                    register={{ ...register("email", { required: "Email required" }) }}
                    classes={styles.formInput} />
                {errors.email &&
                    <p className='error-message'>{errors?.email?.message as string}</p>
                }
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <FormInput
                    name='contact_number'
                    label="Contact Number"
                    type='number'
                    placeholder='Enter contact number'
                    register={{
                        ...register("contact_number",
                            {
                                required: "Contact Number required",
                                maxLength: {
                                    value: 10,
                                    message: "Contact number should be 10 digits"
                                },
                                minLength: {
                                    value: 10,
                                    message: "Contact number should be 10 digits"
                                },
                            })
                    }}
                    classes={styles.formInput} />
                {errors.contact_number &&
                    <p className='error-message'>{errors?.contact_number?.message as string}</p>
                }
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <FormInput
                    name='working_days'
                    label="Working Days"
                    type='text'
                    placeholder='Enter working days'
                    register={{ ...register("working_days", { required: "Working Days required" }) }}
                    classes={styles.formInput} />
                {errors.working_days &&
                    <p className='error-message'>{errors?.working_days?.message as string}</p>
                }
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <FormInput
                    name='duty_start_time'
                    label="Duty Start Time"
                    type='text'
                    placeholder='Enter duty start time'
                    register={{ ...register("duty_start_time", { required: "Duty start time required" }) }}
                    classes={styles.formInput} />
                {errors.duty_start_time &&
                    <p className='error-message'>{errors?.duty_start_time?.message as string}</p>
                }
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <FormInput
                    name='duty_end_time'
                    label="Duty End Time"
                    type='text'
                    placeholder='Enter duty end time'
                    register={{ ...register("duty_end_time", { required: "Duty End Time required" }) }}
                    classes={styles.formInput} />
                {errors.duty_end_time &&
                    <p className='error-message'>{errors?.duty_end_time?.message as string}</p>
                }
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <FormInput
                    name='address'
                    label="Address"
                    type='text'
                    placeholder='Enter address'
                    register={{ ...register("address") }}
                    classes={styles.formInput} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Gender</Form.Label>
                <br />
                <select
                    // className="custom-select"
                    id="selectmethod"
                    defaultValue=""
                    {...register("gender", { required: "Gender required" })}
                    className={`${styles.formInput} ${styles.gender}`}
                >
                    <option value="" disabled>Select Option</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                </select>
                {errors.gender &&
                    <p className='error-message'>{errors?.gender?.message as string}</p>
                }
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Role</Form.Label>
                <br />
                <select
                    id="selectmethod"
                    defaultValue=""
                    {...register("role")}
                    className={`${styles.formInput} ${styles.gender}`}
                >
                    <option value="" disabled>Select Option</option>
                    <option value="rounding_manager">Rounding Manager</option>
                    <option value="employee">Employee</option>
                </select>
                {errors.role &&
                    <p className='error-message'>{errors?.role?.message as string}</p>
                }
            </Form.Group>

            <CustomButton variant="primary" type="submit" label={props.btnTitle} classes={styles.submitBtn} />

        </Form >
    )
}

export default NurseForm