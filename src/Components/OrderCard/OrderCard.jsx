import { useContext } from "react";
import { AuthContext } from "../../assets/Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

// manual hook creat
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../useCart";

const OrderCard = ({ item }) => {
  const { _id, recipe, image, price, name } = item;
  const { user } = useContext(AuthContext);
  const Navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [,refetch] = useCart()

  const handleAddToCard = () => {

    if (user && user.email) {
   
     const cartItem = {
        orderId: _id,
        email: user.email,
        name,
        image,
        price,
        recipe,
      }
      axiosSecure.post("/cards",cartItem)
      .then(res =>{
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Add product succefull",
            showConfirmButton: false,
            timer: 1500
          });
          // refetch the cart update data and count
          refetch();
        }
      })

    } 
    else {
      Swal.fire({
        title: "Are not logged in?",
        text: "please login to add to card",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login In!",
      }).then((result) => {
        if (result.isConfirmed) {
          Navigate("/login", { state: { from: location } });
        }
      });

    }

  };

  return (
    <div className="card bg-base-100 shadow-xl mt-2">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="font-bold absolute right-0 mr-4 pr-2 pl-2 rounded-xl mt-3 bg-black text-white">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe} </p>
        <div className="card-actions justify-center">
          <button
            onClick={ handleAddToCard}
            className="btn btn-outline border-0 border-b-4 text-orange-500"
          >
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
