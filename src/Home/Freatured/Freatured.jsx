import featuredImg from "../../assets/home/featured.jpg";
import SectionTitle from "../../Conponents/SectionTitle/SectionTitle";
import "./Featured.css";
const Freatured = () => {
  return (
    <div className="featured text-white drop-shadow-2xl py-32 my-12">
      <SectionTitle heading={"Featured Item"} subHeading={"check it out"} />
      <div className="grid md:grid-cols-2  py-8 px-16 justify-items-center items-center">
        <div className="">
          <img className="md:w-[648px] md:h-[400px]" src={featuredImg} alt="" />
        </div>
        <div className="text-left  space-y-8">
          <p className="text-xl">March 20, 2023</p>
          <h2 className="text-xl">WHERE CAN I GET SOME?</h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Freatured;
