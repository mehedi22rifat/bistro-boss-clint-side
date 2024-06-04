import { Helmet } from "react-helmet-async";
import Cover from "../../../ManuPages/Cover/Cover";
import img from "../../../../assets/ImageResorce/menu/banner3.jpg";
import dessertsImg from '../../../ImageResorce/menu/dessert-bg.jpeg'
import pizzaImg from '../../../ImageResorce/menu/pizza-bg.jpg'
import saladImg from '../../../ImageResorce/menu/salad-bg.jpg'
import supImg from '../../../ImageResorce/menu/soup-bg.jpg'
import useManu from "../../../../Hooks/useManu";
import SectionHead from "../../../../Components/SectionHead/SectionHead";
import ManuCategory from "../../../ManuPages/Cover/ManuCategory/ManuCategory";

const Manu = () => {
  const [manu] = useManu();
  const desserts = manu.filter((data) => data.category === "dessert");
  const pizza = manu.filter((data) => data.category === "pizza");
  const salads = manu.filter((data) => data.category === "salad");
  const soups = manu.filter((data) => data.category === "soup");
  const offered = manu.filter((data) => data.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Manu</title>
      </Helmet>
      <Cover img={img} title={"Our Manu"}></Cover>
      <SectionHead subTitle={"---Don't miss---"} Heading={"TODAY'S OFFER"}>
      </SectionHead>
      {/* offered reladet data */}
      <ManuCategory items={offered}></ManuCategory>
      {/* desserts */}
      <ManuCategory 
       items={desserts}
       title={'Dessert'}
       img={dessertsImg}>
      </ManuCategory>
      <ManuCategory items={pizza} title={'Pizza'} img={pizzaImg}></ManuCategory>
      <ManuCategory items={salads} title={'Salad'} img={saladImg}></ManuCategory>
      <ManuCategory items={soups} title={'Soup'} img={supImg}></ManuCategory>
    
    </div>
  );
};

export default Manu;
