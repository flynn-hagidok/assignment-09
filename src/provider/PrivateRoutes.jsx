import { Navigate, useLocation } from "react-router";
import { AuthContext } from "./AuthContext";
import Loading from "../components/Loading/Loading"
import { useContext } from "react";


const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <Loading></Loading>
    }
    else if(user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoutes;