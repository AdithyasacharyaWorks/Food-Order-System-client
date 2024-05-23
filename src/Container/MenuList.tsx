import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuContainer from "../Components/MenuContainer";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaCartArrowDown } from "react-icons/fa";
import ErrorContainer from "../Components/ErrorContainer";
import { MoonLoader } from "react-spinners";

function MenuList() {
  const [menu, setMenu] = useState([]);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const numberOfCartItem = useSelector((state) => state.cartReducer.totalItems);
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BASE_URL}/menu?category=${id}`,
      )
      .then((res) => {
        setMenu(res?.data?.responseData);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  }, []);

  const handleCartClick = () => {
    navigate("/cart");
  };
  return (
    <div className="flex flex-col h-screen">
      {/* Sticky header with navigation buttons */}
      <div className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="sticky top-0 bg-white p-3 rounded-tl-xl rounded-br-xl">
          <h2 className="text-gray-800 text-lg ">{id}</h2>
        </div>
        <button
          className="text-white flex justify-center items-center gap-2  bg-blue-500 p-3 text-lg rounded-tl-xl rounded-br-xl"
          onClick={handleCartClick}
        >
          cart
          <FaCartArrowDown />
          <div className="flex w-7 h-7 rounded-full justify-center items-center bg-gray-800">
            {numberOfCartItem}
          </div>
        </button>
      </div>
      {/* Content */}
      <div className="flex-1 overflow-y-auto">
       {isError &&  <div className="flex justify-center items-center mt-[70%]">
          
            <div>
              <ErrorContainer message={"Error loading menu please go back"} />
            </div>
          
        </div>}
        {/* Menu Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mt-5">
          {menu.length > 0 ? (
            menu.map((category, index) => (
              <MenuContainer key={index} data={category} />
            ))
          ) : (
            <div className="my-auto flex justify-center items-center">
              {isError && <MoonLoader />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuList;
