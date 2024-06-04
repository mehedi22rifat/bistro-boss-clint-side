import SectionHead from "../../SectionHead/SectionHead";
import feturedImg from '../../../assets/ImageResorce/home/featured.jpg'
import '../Featured/Featured.css'
const Featured = () => {
    return (
        <div>
            <SectionHead Heading={'FROM OUR MENU'} subTitle={'---Check it out---'}>
            </SectionHead>
            <div className="text-white bg-fixed featured-img mx-auto flex lg:flex-row sm:flex-col space-x-8 py-16 px-24">
                <img className="w-[400px] lg:mt-36" src={feturedImg} alt="" />
              <div className="space-y-2 lg:mt-36">
                <p className="font-bold">March 20, 2023</p>
                <h1 className="uppercase text-xl">WHERE CAN I GET SOME?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                 <button className="btn btn-outline border-0 border-b-4 text-white">READ MORE</button>
              </div>
            
            </div>

        </div>
    );
};

export default Featured;