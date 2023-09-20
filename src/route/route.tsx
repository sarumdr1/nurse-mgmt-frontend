import React from "react";
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import routes from "../config/routes";
import Login from '../pages/Login/index';
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnAuthenticatedRoute from "./UnAuthenticatedRoute";
import Signup from '../pages/Signup/index';
import Nurses from "../pages/Nurses";
import AddNurse from '../pages/Nurses/AddNurse/index';
import EditNurse from '../pages/Nurses/EditNurse/index';
import NurseDetail from "../pages/Nurses/NurseDetail";

const Routes = () => {
    return (
        <BrowserRouter>

            <Router>
                <Route
                    element={<UnAuthenticatedRoute />}
                >
                    <Route
                        path={routes.login.path}
                        element={<Login />}
                    />

                    <Route
                        path={routes.signup.path}
                        element={<Signup />}
                    />
                </Route>
                <Route element={<AuthenticatedRoute />}>
                    <Route
                        path={routes.nurses.path}
                        element={<Nurses />}
                    />
                    <Route
                        path={routes.addNurses.path}
                        element={<AddNurse />}
                    />
                    <Route
                        path={routes.editNurses.path(':id')}
                        element={<EditNurse />}
                    />
                    <Route
                        path={routes.nurseDetail.path(':id')}
                        element={<NurseDetail />}
                    />
                </Route>
            </Router>
        </BrowserRouter>
    )
}
export default Routes;
