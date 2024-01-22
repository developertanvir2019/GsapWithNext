import ScrollSection from "./ScrollSection";

const Horizontal = () => {
  return (
    <>
      <div className="bg-slate-800 h-screen text-center flex justify-center items-center">
        <div>
          <h1 className="text-4xl font-bold text-white">Tanvir Ahmed</h1>
          <h1 className="text-sm font-semibold text-blue-700">
            Full stack wev developer
          </h1>
        </div>
      </div>
      <ScrollSection />
    </>
  );
};

export default Horizontal;
