

const SectionHead = ({subTitle,Heading}) => {
    return (
        <div className="w-1/4 text-center mx-auto my-11">
            <h1 className="text-xl text-orange-300 italic font-bold">{subTitle}</h1>
            <p className="border-y-2 mt-2 mb-2"></p>
             <h2 className="text-4xl">{Heading}</h2> 
             <p className="border-y-2 mt-2 mb-2"></p>
        </div>
    )
};

export default SectionHead;