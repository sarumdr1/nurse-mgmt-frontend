import { lazy } from "react";
import * as paths from "../constants/routes";

const routes = {
    login: {
        path: paths.LOGIN,
        component: lazy(() => import("../pages/Login")),
    },
    signup: {
        path: paths.SIGNUP,
        component: lazy(() => import("../pages/Signup")),
    },
    nurses: {
        path: paths.NURSES,
        component: lazy(() => import("../pages/Nurses")),
    },
    addNurses: {
        path: paths.ADD_NURSES,
        component: lazy(() => import("../pages/Nurses/AddNurse")),
    },
}

export default routes