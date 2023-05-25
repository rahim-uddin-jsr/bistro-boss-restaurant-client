import { Helmet } from "react-helmet-async";
import menuBG from "../../assets/menu/banner3.jpg";
import desertBG from "../../assets/menu/dessert-bg.jpeg";
import pizzaBG from "../../assets/menu/pizza-bg.jpg";
import soupBG from "../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../Conponents/SectionTitle/SectionTitle";
import useMenu from "../../hooks/UseMenu/useMenu";
import Cover from "../../Shared/Cover/Cover";
import MenuCategory from "./MenuCategory/MenuCategory";
const MenuPage = () => {
  const [menu] = useMenu();
  const deserts = menu.filter(
    (singleMenu) => singleMenu.category === "dessert"
  );
  const soup = menu.filter((singleMenu) => singleMenu.category === "soup");
  const salad = menu.filter((singleMenu) => singleMenu.category === "salad");
  const pizza = menu.filter((singleMenu) => singleMenu.category === "pizza");
  const offered = menu.filter(
    (singleMenu) => singleMenu.category === "offered"
  );
  return (
    <div>
      <Helmet>
        <title>BISTRO BOSS | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Cover
        img={menuBG}
        title={"OUR MENU"}
        SubTitle={"WOULD YOU LIKE TO TRY A DISH?"}
      />
      <SectionTitle heading={"TODAY'S OFFER"} subHeading={"---Don't miss---"} />
      <MenuCategory menu={offered} btnText={"ORDER YOUR FAVOURITE FOOD "} />
      {/* desert */}
      <MenuCategory
        coverImg={desertBG}
        menu={deserts}
        btnText={"ORDER YOUR FAVOURITE FOOD"}
        coverTitle={"Desert"}
        coverSubTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        coverHeight="700px"
      />
      {/* pizza  */}
      <MenuCategory
        coverImg={pizzaBG}
        menu={pizza}
        btnText={"ORDER YOUR FAVORITE FOOD"}
        coverTitle={"PIZZA"}
        coverSubTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        coverHeight="700px"
      />
      {/* salads  */}
      <MenuCategory
        coverImg={pizzaBG}
        menu={salad}
        btnText={"ORDER YOUR FAVORITE FOOD"}
        coverTitle={"SALAD"}
        coverSubTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        coverHeight="700px"
      />
      {/* soup  */}
      <MenuCategory
        coverImg={soupBG}
        menu={soup}
        btnText={"ORDER YOUR FAVORITE FOOD"}
        coverTitle={"SOUP"}
        coverSubTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        coverHeight="700px"
      />
    </div>
  );
};

export default MenuPage;
