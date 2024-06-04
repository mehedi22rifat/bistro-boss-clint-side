import { useContext } from "react";
import { Link,} from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { BiCartAdd } from "react-icons/bi";
import useCart from "../../../../useCart";




const Navbar = () => {
  const {logOut,user} = useContext(AuthContext)

  const [cart] = useCart()

   const handleLogOut = () =>{
     logOut()
     .then(() =>{

     })
     .catch(error =>{
      console.log(error)
     })
   }



      const links =<>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/manu'}>Our Manu</Link></li>
      <li><Link to={'/order/Salad'}>Order</Link></li>
      <li><Link to={'/prgrass'}>Prograss</Link></li>
      <li>
        <Link to={'/dashboard/cart'}>
         <button className="flex items-center gap-1 border p-1 rounded-lg bg-purple-900">
          <BiCartAdd className="text-2xl" />
          <div className="badge bg-orange-500 text-white font-bold">+{cart.length}</div>
          </button>
        </Link>
      </li>
        {
            user ? <><button onClick={handleLogOut} className="btn">LogOut</button> </> 
            : <><li><Link to={'/login'}>Login</Link></li> </>
        }
      
      
      </>
    return (
        <div className="navbar max-w-7xl mx-auto fixed z-10 bg-opacity-30 bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
    
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex items-center">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;