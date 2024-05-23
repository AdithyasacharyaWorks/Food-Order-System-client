import { useState } from "react";
import {
  FaMoneyBill,
  FaUtensils,
  FaStar,
  FaDrumstickBite,
  FaAngleUp,
  FaAngleDown,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../Redux/Slices/slice1";

function MenuContainer({ data }) {
  // Determine the color and icon based on the type
  const typeColor =
    data?.type === "Vegeterian" ? "text-green-600" : "text-red-600";
  const typeIcon =
    data?.type === "Vegeterian" ? (
      <FaStar className="text-yellow-400 inline-block" />
    ) : (
      <FaDrumstickBite className="text-red-600 inline-block" />
    );

  const [count, setCount] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    setCount(count + 1);
    dispatch(addItem(data));
  };

  const handleIncrement = () => {
    setCount(count + 1);
    dispatch(addItem(data));
  };

  const handleDecrement = () => {
    setCount(count - 1);
    dispatch(removeItem(data.id));
  };

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex items-center justify-start mb-4">
      <div className="flex-none">
        <img
          className="w-32 h-32 object-cover rounded-l-xl"
          src={data?.image}
          alt="image"
        />
      </div>
      <div className="flex-grow bg-white rounded-r-xl overflow-hidden shadow-lg">
        <div className="px-4 py-3">
          {/* Display star icon after dish name if it's featured */}
          <div className="font-bold text-lg mb-1 text-gray-800 flex items-center">
            {data?.name}
            {data?.isFeatured && <FaStar className="text-yellow-400 ml-2" />}
          </div>
          {data?.description && (
            <>
              <p
                className={`text-sm text-gray-700 mb-2 ${expanded || data?.description.length <= 100 ? "block" : "overflow-hidden h-12"}`}
              >
                {data?.description}
              </p>
              {data?.description.length > 100 && (
                <span
                  className="text-blue-500 font-semibold cursor-pointer"
                  onClick={toggleDescription}
                >
                  {expanded ? "Show Less" : "Show More"}
                </span>
              )}
            </>
          )}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FaMoneyBill className={`mr-2`} />
              <p className="text-gray-700 text-base">{data?.amount}</p>
            </div>
            <div
              className={`bg-opacity-25 bg-gray-100 rounded-lg px-3 py-1 ${typeColor} flex items-center`}
            >
              <FaUtensils className={`mr-2 ${typeColor}`} />
              <p className={`${typeColor} text-base font-semibold`}>
                {data?.type}
              </p>
            </div>
          </div>
          <div className="flex justify-end items-center mt-2">
            {count === 0 ? (
              <button
                className="bg-gray-800  text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 rounded-bl-xl rounded-tr-xl"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex items-center">
                <button
                  className="bg-gray-800 text-white font-bold py-2 px-4 rounded-tl-xl rounded-bl-xl"
                  onClick={handleDecrement}
                >
                  -
                </button>
                <p className="mx-2">{count}</p>
                <button
                  className="bg-gray-800 text-white font-bold py-2 px-4 rounded-tr-xl rounded-br-xl"
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuContainer;
