



const PopularCard = ({item}) => {
    const {recipe,image,price,name} = item;
    return (
        <div className="flex space-x-3">
            <img style={{borderRadius:"0 200px 200px 200px"}} className="w-[104px]" src={image} alt="" />
            <div className="">
               <h1 className="uppercase text-2xl">{name} -------------</h1> 
               <p>{recipe}</p>
            </div>
            <p className="text-orange-400 font-bold">{price}</p>
        </div>
    );
};

export default PopularCard;