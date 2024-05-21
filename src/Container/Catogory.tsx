import CatogoryContainer from "../Components/CatogoryContainer";

function Catogory() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3">
          <CatogoryContainer />
          <CatogoryContainer />
          <CatogoryContainer />
          <CatogoryContainer />
          <CatogoryContainer />
          <CatogoryContainer />
          <CatogoryContainer />
          <CatogoryContainer />
        </div>
      </div>
    </div>
  );
}

export default Catogory;
