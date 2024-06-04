import { useState } from "react";
import cover from "../../../ImageResorce/shop/banner2.jpg";
import Cover from "../../../ManuPages/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useManu from "../../../../Hooks/useManu";

import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const cetagorys = ['Salad','Pizza','Soup','Dessert','Drinks']
    const {category} = useParams()
    const initialIndex = cetagorys.indexOf(category) 

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [manu] = useManu();
  const salad = manu.filter((data) => data.category === "salad");
  const pizza = manu.filter((data) => data.category === "pizza");
  const Soup = manu.filter((data) => data.category === "soup");
  const dessert = manu.filter((data) => data.category === "dessert");
  const drinks = manu.filter((data) => data.category === "drinks");
  
  
  return (
    <div className="">
        <Helmet>
            <title>Bistro Boss | Orde Food</title>
        </Helmet>
      <Cover img={cover} title={"OUR SHOP"}></Cover>
      <div className="text-center mt-6">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={Soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
