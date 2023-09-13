import React, { useEffect } from "react";
import { useNavigate, useOutlet } from "react-router-dom";
import { getToken } from '../../utils/token';
import config from "../../config/index";
import routes from "../../config/routes";


const UnAuthenticatedRoute = () => {
    const outlet = useOutlet();
    const navigate = useNavigate();

    const token = getToken({ name: config.tokenName })?.token;


    useEffect(() => {

        if (Object.keys(token).length !== 0) {

            console.log('if outside')
            navigate(routes.nurses.path);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);



    return (
        <div >
            {outlet}
        </div>
    );
}

export default UnAuthenticatedRoute