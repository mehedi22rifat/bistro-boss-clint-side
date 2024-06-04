import { useContext } from "react";
import useAdmin from "./useAdmin";
import { AuthContext } from "../assets/Provider/AuthProvider";
import { Navigate, useLocation} from "react-router-dom";

const AdminRouts = ({children}) => {
    const location = useLocation()
    const [isAdmin,isAdminLoding] = useAdmin()
    const {user,loading} = useContext(AuthContext)
    if(loading || isAdminLoding){
        return <span className="loading loading-spinner loading-lg"></span>
    }
     
    if(user && isAdmin){
        return children;
    }
    return <Navigate to={'/'} state={{from:location}} replace></Navigate>
};

export default AdminRouts;