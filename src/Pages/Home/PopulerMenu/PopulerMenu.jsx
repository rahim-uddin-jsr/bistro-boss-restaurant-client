import SectionTitle from "../../../Conponents/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/UseMenu/useMenu";
import MenuCategory from "../../MenuPage/MenuCategory/MenuCategory";

const PopulerMenu = () => {
  const [menu] = useMenu();

  const popularMenus = menu.filter((item) => item.category === "popular");

  return (
    <section className="my-12">
      <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"} />
        <MenuCategory
          // key={item._id}
          menu={popularMenus}
          btnText={"View Full  Menu"}
        />
      {/* <div className="grid md:grid-cols-2 gap-10">
        {popularMenus.map((item) => (
        ))}
      </div> */}
    </section>
  );
};

export default PopulerMenu;
