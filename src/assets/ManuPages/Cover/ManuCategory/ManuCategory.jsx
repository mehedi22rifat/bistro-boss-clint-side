import { Link } from "react-router-dom";
import PopularCard from "../../../Shaired/Footer/PopularCard/PopularCard";
import Cover from "../Cover";



const ManuCategory = ({items,img,title}) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
           <div>
           <div className="grid lg:grid-cols-2 md:grid-cols-1 w-[95%] mx-auto gap-x-9 gap-y-8 mt-7 mb-8">
                {
                    items.map(itemss => 
                     <PopularCard 
                      key={itemss._id} 
                      item={itemss}
                      >
                    </PopularCard>)
                }
             </div>
              <div className="text-center mt-3 mb-7">
              <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4">ORDER YOUR FAVOURITE FOOD</button></Link>
              </div>
           </div>
        </div>
    );
};

export default ManuCategory;