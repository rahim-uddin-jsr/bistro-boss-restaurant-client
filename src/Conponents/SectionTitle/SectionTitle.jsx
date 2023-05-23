const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-1/2 mx-auto mt-8">
      <p className="text-yellow-400 mb-4">---{subHeading}---</p>
      <h2 className="text-4xl p-4 uppercase my-3 font-semibold border-y-4">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
