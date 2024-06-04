import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from './../assets/Provider/AuthProvider';

 const axiosSecure = axios.create({
    baseURL:'http://localhost:5000',

  })
const useAxiosSecure = () => {
  const Navigate = useNavigate()
  const {logOut} = useContext(AuthContext)
  axiosSecure.interceptors.request.use(function(config){
    const token = localStorage.getItem('access-token')
    // console.log('request toped by interseptor',token)
    config.headers.authorization = `Bearer ${token}`
    return config
  },function (error) {
    // Do something with request error
    return Promise.reject(error);
  })

  // intersepter 401 nad 403 and logout the user and login
  axiosSecure.interceptors.response.use(function(response){
    return response;
  }, async(error) =>{
    const status = error.response.status;
    // console.log('status error in the interceptor', status)
    if(status === 401 || status === 403){
      await logOut()
      Navigate('/login')
    }
    return Promise.reject(error);
  })
  



    return axiosSecure
};

export default useAxiosSecure;