import {Navigate, Outlet} from "react-router-dom";

const AuthCheck = () => {
    const token = localStorage.getItem("token");

    return (
        <>
            {
                token
                    ? <Outlet/>
                    : <Navigate to={'/auth/login'}/>
            }
        </>
    );
};

export default AuthCheck;