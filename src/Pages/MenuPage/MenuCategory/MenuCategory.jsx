import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const MenuCategory = ({
  menu,
  btnText,
  coverImg,
  coverTitle,
  coverSubTitle,
  coverHeight,
  category,
}) => {
  return (
    <div className="my-24">
      {coverImg && (
        <Cover
          img={coverImg}
          title={coverTitle}
          coverSubTitle={coverSubTitle}
          height={coverHeight}
        />
      )}
      <div className="grid md:grid-cols-2 gap-10 my-12">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      {btnText && (
        <Link to={`/order/${category}`}>
          <button className="btn btn-ghost border-0 border-b-2 border-black">
            {btnText}
          </button>
        </Link>
      )}
    </div>
  );
};

export default MenuCategory;
