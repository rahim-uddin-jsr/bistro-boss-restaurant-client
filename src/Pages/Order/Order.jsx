import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderBg from "../../assets/shop/banner2.jpg";
import useMenu from "../../hooks/UseMenu/useMenu";
import Cover from "../../Shared/Cover/Cover";
import TabItem from "../MenuPage/TabItem/TabItem";
const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks", "offered"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category || "salad");
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const soup = menu.filter((singleMenu) => singleMenu.category === "soup");
  const salad = menu.filter((singleMenu) => singleMenu.category === "salad");
  const pizza = menu.filter((singleMenu) => singleMenu.category === "pizza");
  const desert = menu.filter((singleMenu) => singleMenu.category === "dessert");
  const drinks = menu.filter((singleMenu) => singleMenu.category === "offered");
  const offered = menu.filter(
    (singleMenu) => singleMenu.category === "popular"
  );

  return (
    <div>
      <Cover
        img={orderBg}
        title={"Order food"}
        SubTitle={"WOULD YOU LIKE TO TRY A DISH?"}
      />
      <div className="container mx-auto">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Piazza</Tab>
            <Tab>Soup</Tab>
            <Tab>Desert</Tab>
            <Tab>Drinks</Tab>
            <Tab>Popular</Tab>
          </TabList>

          <TabPanel>
            <TabItem items={salad} />
          </TabPanel>
          <TabPanel>
            <TabItem items={soup} />
          </TabPanel>
          <TabPanel>
            <TabItem items={pizza} />
          </TabPanel>
          <TabPanel>
            <TabItem items={desert} />
          </TabPanel>
          <TabPanel>
            <TabItem items={drinks} />
          </TabPanel>
          <TabPanel>
            <TabItem items={offered} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
