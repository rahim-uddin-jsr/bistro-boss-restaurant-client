import { Link } from "react-router-dom";
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
        menu={popularMenus}
        // btnText={"View Full  Menu"}
        category={"popular"}
      />
      {/* <div className="grid md:grid-cols-2 gap-10">
        {popularMenus.map((item) => (
        ))}
      </div> */}
      <Link to={`/menu/`}>
        <button className="btn btn-ghost border-0 border-b-2 border-black">
          From Our Menu
        </button>
      </Link>
    </section>
  );
};

export default PopulerMenu;
