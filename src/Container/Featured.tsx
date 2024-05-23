import { useEffect, useState } from "react";
import FeaturedContainer from "../Components/FeaturedContainer";
import axios from "axios";
import { MoonLoader } from "react-spinners";

function Featured() {
  const [menu, setMenus] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/getFeaturedMenus`)
      .then((res) => {
        setMenus(res.data.responseData);
        setLoader(false);
      });
  }, []);
  return (
    <div className="mt-5">
      <div className="flex justify-center items-center">
        {loader ? <MoonLoader color="#424242" /> : ""}
      </div>
      <div className="flex overflow-x-auto gap-3 p-2">
        {menu?.map((ele, index) => {
          return <FeaturedContainer key={index} data={ele} />;
        })}
      </div>
    </div>
  );
}

export default Featured;
