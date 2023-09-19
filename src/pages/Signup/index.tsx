import React from "react"
import { Form, Button, Col, Row } from "react-bootstrap"
import FormInput from "../../component/FormInput"

import LoginImage from '../../images/login.svg'

import styles from './styles.module.scss'
import CustomButton from '../../component/CustomButton/index';
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import config from "../../config"
import routes from "../../config/routes"
import { setUser } from "../../utils/user"
import { setToken } from "../../utils/token"
import { post } from "../../API/axios"
import { useNavigate } from "react-router-dom"

const Signup = () => {

    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data: any) => {
        post("/signup", data)
            .then((res: any) => {
                toast.success("Signup Successful");
                navigate(routes.login.path)
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
        <>
            <Row>
                <Col lg={5} md={4} sm={4} className={styles.imageBody}>
                    <img src={LoginImage} height='100%' className={styles.image} />
                </Col>
                <Col lg={7} md={8} sm={8} className={styles.formBody}>
                    {/* <p className={styles.welcomeText} ></p> */}
                    <p className={styles.mainTitle}>Create your account</p>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <FormInput name='email' label="Email" type='email' placeholder='Enter your email address' register={{ ...register("email", { required: "Email required" }) }} />
                            {errors.email &&
                                <p className='error-message'>{errors?.email?.message as string}</p>
                            }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">

                            <FormInput name='password' label="Password" type='password' placeholder='Enter your password' register={{ ...register("password", { required: "Password required" }) }} />
                            {errors.password &&
                                <p className='error-message'>{errors?.password?.message as string}</p>
                            }
                        </Form.Group>

                        <CustomButton variant="primary" type="submit" label='Sign up' classes={styles.submitBtn} />

                    </Form>
                    <div className={styles.footerDiv}>
                        <p>Already have an account</p>
                        <p className={styles.loginText} onClick={() => navigate(routes.login.path)}>Log In</p>
                    </div>
                </Col>
            </Row>

        </>
    )
}

export default Signup