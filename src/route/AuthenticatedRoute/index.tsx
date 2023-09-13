import React, { Suspense } from "react";
import { Navigate, useOutlet } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { getToken } from '../../utils/token';
import config from "../../config/index";
import routes from "../../config/routes";

import styles from '../UnAuthenticatedRoute/styles.module.scss'

const AuthenticatedRoute = () => {

    const outlet = useOutlet();
    const token = getToken({ name: config.tokenName })?.token;

    if (Object.keys(token).length === 0) {
        return <Navigate to={routes.login.path} />;
    }
    return (
        <div className={styles.root}>
            <div className={styles.appBarSpacer} />
            <Row style={{ width: '100%', margin: '0' }}>
                <Col lg={2} id="sidebar-wrapper">
                </Col>
                <Col lg={10} id="page-content-wrapper">
                    <main
                        className={styles.content}
                    >
                        <Suspense fallback={<div>Loading...</div>}>

                            {outlet}
                        </Suspense>
                    </main>
                </Col>
            </Row>

        </div>
    );
}

export default AuthenticatedRoute