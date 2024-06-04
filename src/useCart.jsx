import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "./assets/Provider/AuthProvider";


const useCart = () => {

    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)

    // tanStactQuery
    const {refetch,data: cart =[]} = useQuery({
        queryKey:['cart',user?.email],
        queryFn: async () => {
          const res = await axiosSecure.get(`/cards?email=${user.email}`)
          return res.data
        }
    })
    return [cart,refetch]
};

export default useCart;