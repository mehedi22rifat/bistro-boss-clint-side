import { Link, Outlet } from "react-router-dom";
import img from '../../assets/ImageResorce/home/04.jpg'
import { VscPreserveCase, VscPreview } from "react-icons/vsc";
import { FaAddressCard, FaHome,FaOilCan } from "react-icons/fa";
import { MdLibraryBooks, MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoBagAddOutline, IoBookmarksOutline, IoListSharp } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import useCart from "../../useCart";
import useAdmin from "../../Hooks/useAdmin";




const Dashbord = () => {
  const [cart] = useCart()


  const [isAdmin] =useAdmin();
  // TODO:get admin value in database

    return (
        <div className="flex max-w-7xl mx-auto">
            <div className="w-53 h-full bg-orange-500">
            <aside className="flex flex-col text-black w-64 h-screen px-5 py-8 overflow-y-auto border-r rtl:border-r-0 rtl:border-l dark:border-gray-700">
  <Link to={''}>
    <img className="w-auto h-7" src={img} alt />
  </Link>
  <div className="flex flex-col justify-between flex-1 mt-6">
    <nav className="-mx-3 space-y-6 ">

      {
        isAdmin ? <> <div className="space-y-3 ">
        <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">analytics</label>
       <div>
       <Link to={'/dashboard/adminHome'} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
          <FaHome></FaHome> 
          <span className="mx-2 text-sm font-medium">Admin Home</span>
        </Link>
        <Link to={'/dashboard/addItem'} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
        <IoBagAddOutline />
          <span className="mx-2 text-sm font-medium">Add Item</span>
        </Link>
       <Link to={'/dashboard/manageItem'} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
       <IoListSharp />
          <span className="mx-2 text-sm font-medium">Manage Item</span>
        </Link>
        <Link to={'/dashboard/manageBoking'} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
        <IoBookmarksOutline />
          <span className="mx-2 text-sm font-medium">Manage Booking</span>
        </Link>
        <Link to={'/dashboard/allUser'} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
        <HiUserGroup />
          <span className="mx-2 text-sm font-medium">All User</span>
        </Link>
     </div>
      </div></>
        :
        <>
        <div className="space-y-3 ">
        <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">analytics</label>
       <div>
       <Link to={'/dashboard/userHome'} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
          <FaHome></FaHome> 
          <span className="mx-2 text-sm font-medium">User Home</span>
        </Link>
        <Link to={'/dashboard/reservation'} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
         <VscPreserveCase />
          <span className="mx-2 text-sm font-medium">Reservation</span>
        </Link>
       <Link to={'/dashboard/cart'} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
         <FaAddressCard />
          <span className="mx-2 text-sm font-medium">My Cart <span className="font-bold text-lg bg-purple-700 p-1 rounded-lg">({cart.length}) </span> </span>
        </Link>
        <Link to={'/dashboard/review'} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
        <VscPreview />
          <span className="mx-2 text-sm font-medium">Add Review</span>
        </Link>
        <Link to={'/dashboard/booking'} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
         <MdLibraryBooks />
          <span className="mx-2 text-sm font-medium">My Booking</span>
        </Link>
     </div>
      </div>
        </>
      }
      <div className="space-y-3 ">
        <label className="px-3 text-lg">analytics</label>
       <div>
       <Link to={'/'} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
          <FaHome></FaHome>
          <span className="mx-2 text-sm font-medium">Home</span>
        </Link>
        <Link to={'/order/Salad'} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
          <FaOilCan></FaOilCan>
          <span className="mx-2 text-sm font-medium">Order </span>
        </Link>
         <Link to={'/order/contact'} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
         <MdOutlineMarkEmailUnread />
          <span className="mx-2 text-sm font-medium">Contact </span>
        </Link>
       </div>
      </div> 
       
    </nav>
  </div>
</aside>

            </div>
            <div className="flex-1 py-12 px-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;