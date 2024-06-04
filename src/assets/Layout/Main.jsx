import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shaired/Footer/Footer";
import Navbar from "../Shaired/Footer/Navbar/Navbar";




const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div className="">
           <div className="max-w-7xl">
          { noHeaderFooter || <Navbar></Navbar>}
           </div>
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;