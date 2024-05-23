import CatogoryContainer from "../Components/CatogoryContainer";
import { useEffect, useState } from "react";
import axios from "axios";
import { MoonLoader } from "react-spinners";

function Catogory() {
  const [catogory, setCatogory] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/getCategories`)
      .then((res) => {
        setCatogory(res?.data?.responseData);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <div className="flex justify-center items-center">
          {loader ? <MoonLoader color="#424242" /> : ""}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3">
          {catogory.map((ele, index) => {
            return <CatogoryContainer key={index} data={ele} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Catogory;
