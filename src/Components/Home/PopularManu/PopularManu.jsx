
import SectionHead from "../../SectionHead/SectionHead";
import PopularCard from "../../../assets/Shaired/Footer/PopularCard/PopularCard";
import useManu from "../../../Hooks/useManu";



const PopularManu = () => {

    const [manu] = useManu()
    
    const popular = manu.filter(data => data.category === 'popular')

    return (
        <div className="">
            <SectionHead
             subTitle={'---Check it out---'}
             Heading={'FROM OUR MENU'}
            >
            </SectionHead>
           
             <div className="grid lg:grid-cols-2 md:grid-cols-1 w-[95%] mx-auto gap-4 gap-x-5 mt-7 mb-8">
                {
                    popular.map(itemss => 
                     <PopularCard 
                      key={itemss._id} 
                      item={itemss}
                      >
                    </PopularCard>)
                }
             </div>


            
        </div>
    );
};

export default PopularManu;