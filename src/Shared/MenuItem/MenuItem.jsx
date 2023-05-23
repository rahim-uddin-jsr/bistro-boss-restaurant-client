const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-2">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[104px] "
        src={image}
        alt=""
      />
      <div className="text-left">
        <div className="flex justify-between ">
          <h3 className="uppercase"> {name}-------------</h3>
          <p className="text-yellow-500 text-2xl">{price}</p>
        </div>
        <p>{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
