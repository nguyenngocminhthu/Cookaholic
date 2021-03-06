/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAuthAction } from "../../redux/actions/Auth/authActions";
import Login from "../View/Authentication/Login";

const Authentication = (SpecificComponent, option, adminRoute = null) => {
    function AuthenticationCheck(props) {
        const user = useSelector((state) => state.auth.user);
        const dispatch = useDispatch();
        const history = useHistory();

        useEffect(() => {
            const fetchAuth = async () => {
                const res = await dispatch(getAuthAction());
                console.log("log at Authentication res: ", res)
                if (res && !res.isAuth) {
                    if (option) {
                        history.push(<Login />);
                    }
                } else {
                    //đã đăng nhập
                    if (adminRoute && !res.role.includes("ROLE_ADMIN")) {
                        //Kiểm tra khong phai admin
                        history.push("/main");
                        return;
                    }
                }
            };
            fetchAuth();
            //To know my current status, send Auth request
        }, []);
        //Đã có login
        return <SpecificComponent {...props} user={user} />;
    }
    return AuthenticationCheck;
};
export default Authentication;