import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const Cart = () => {
    const [cart,refetch] = useCart()
    const totalProce = cart.reduce((total,item) => total+item.price, 0)
    const axiosSecure = useAxiosSecure()


    const handleCardDelete = (id) =>{
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                 axiosSecure.delete(`/cards/${id}`)
                 .then(res =>{
                    if(res.data.deletedCount > 0){
                        refetch()
                        Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                    }
                 })
            }
          });
    }
   
   
   
    return (
        <div className="">
           <div className="flex justify-evenly items-center">
           <div className="text-2xl">Total Cart {cart.length}</div>
            <h1 className="text-xl">Total Price In Product : {totalProce}</h1>
            <button className="btn">Pay</button>
           </div>
        
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
          cart.map((carts,index) => 
            <tr key={carts._id}>
              <th>
               {index + 1}
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={carts.image} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
               {carts.name}
                <br/>
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
              </td>
              <td>{carts.price}</td>
              <th>
                <button onClick={() => handleCardDelete(carts._id)} className="btn btn-ghost text-xl">
                    <FaTrashAlt className="text-red-500" />
                </button>
              </th>
            </tr>)
        }
     
    </tbody>
  </table>
</div>
        
        
        </div>
    );
};

export default Cart;