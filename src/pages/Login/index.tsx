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

const Login = () => {

    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data: any) => {
        post("/login", data)
            .then((res: any) => {
                setToken({
                    name: config.tokenName,
                    value: JSON.stringify(res.data.token),
                });
                setUser({
                    name: config.user,
                    value: JSON.stringify(res.data.data)
                })
                toast.success("Login Successful");
                navigate(routes.nurses.path)
            })
            .catch((error: any) => {
                toast.error(
                    error?.response?.data?.message
                        ? error?.response?.data?.message
                        : error?.data?.message?.password
                            ? error?.data?.message?.password?.[0]
                            : "Login Failed. Please try again."
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
                    <p className={styles.welcomeText} >Welcome back!</p>
                    <p className={styles.mainTitle}>Login to your account</p>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <FormInput name='email' label="Email" type='email' placeholder='Enter your email address' register={register} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">

                            <FormInput name='password' label="Password" type='password' placeholder='Enter your password' register={register} />
                        </Form.Group>

                        <CustomButton variant="primary" type="submit" label='Login' classes={styles.submitBtn} />

                    </Form>
                    <div className={styles.footerDiv}>
                        <p>Don't have an account?</p>
                        <p className={styles.loginText} onClick={() => navigate(routes.signup.path)}>Sign up </p>
                    </div>
                </Col>
            </Row>

        </>
    )
}

export default Login