import { Helmet } from "react-helmet-async";
import Banner from "../../../Components/Home/Banner/Banner";
import Cetagory from "../../../Components/Home/Cetegory/Cetagory";
import Featured from "../../../Components/Home/Featured/Featured";
import PopularManu from "../../../Components/Home/PopularManu/PopularManu";
import Testimoniels from "../../../Components/Home/Testimoniels/Testimoniels";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner> 
            <Cetagory></Cetagory>
            <PopularManu></PopularManu>
            <Featured></Featured>
            <Testimoniels></Testimoniels>
        </div>
    );
};

export default Home;