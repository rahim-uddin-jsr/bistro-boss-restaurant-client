import { useEffect, useState } from "react";
import SectionTitle from "../../Conponents/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopulerMenu = () => {
  const [populerMenu, setPopularMenu] = useState([]);
  useEffect(() => {
    fetch("/menu.json").then((res) =>
      res.json().then((data) => {
        const popularMenus = data.filter((menu) => menu.category === "popular");
        setPopularMenu(popularMenus);
      })
    );
  }, []);
  console.log(populerMenu);
  return (
    <section>
      <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"} />
      <div className="grid md:grid-cols-2 gap-10">
        {populerMenu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopulerMenu;
