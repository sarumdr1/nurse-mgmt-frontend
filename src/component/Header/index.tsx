import React from "react"
import { Dropdown, Nav } from "react-bootstrap"
import config from "../../config";
import routes from "../../config/routes";
import { removeToken } from "../../utils/token";
import { getUser, removeUser } from "../../utils/user";

import style from './style.module.scss'
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate()

    const userData = getUser({ name: config.user });

    const handleLogout = () => {
        removeToken({ name: config.tokenName });
        removeUser({ name: config.user });
        navigate(routes.login.path);
    }
    return (
        <>
            <Nav className={style.header}>
                <p className={style.title}>Nurse Management System</p>
                <Nav.Item>
                    <Dropdown>
                        <Dropdown.Toggle
                            id="dropdown-basic"
                            className={style.profile}
                        >
                            {userData?.user ?? "User"}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>

                            <Dropdown.Item
                                className={style.logout}
                                onClick={handleLogout}
                            >
                                Logout
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav.Item>
            </Nav>
        </>
    )
}

export default Header