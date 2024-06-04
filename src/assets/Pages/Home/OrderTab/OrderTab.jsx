import OrderCard from "../../../../Components/OrderCard/OrderCard";


const OrderTab = ({items}) => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 p-4">
        {items.map((items) => (
          <OrderCard 
          key={items._id} 
          item={items}></OrderCard>
        ))}
      </div>
    );
};

export default OrderTab;