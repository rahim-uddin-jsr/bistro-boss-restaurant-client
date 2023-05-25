import { Parallax } from "react-parallax";

const Cover = ({ img, title, coverSubTitle, SubTitle, height }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 52 }}
      bgImage={img}
      bgImageAlt="The Menu"
      strength={-300}
    >
      <div className={`hero ${!height ? "min-h-[800px]" : `min-h-[700px]`} `}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content bg-black bg-opacity-30 px-16">
          <div className="max-w-lg ">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <h3 className="mb-5 text-3xl font-bold uppercase">{SubTitle}</h3>
            {coverSubTitle && <p className="mb-5">{coverSubTitle}</p>}
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
