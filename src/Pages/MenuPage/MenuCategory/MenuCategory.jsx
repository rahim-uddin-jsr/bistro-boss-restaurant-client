import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";

const MenuCategory = ({
  menu,
  btnText,
  coverImg,
  coverTitle,
  coverSubTitle,
  coverHeight,
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
        <button className="btn btn-ghost border-0 border-b-2 border-black">
          {btnText}
        </button>
      )}
    </div>
  );
};

export default MenuCategory;
