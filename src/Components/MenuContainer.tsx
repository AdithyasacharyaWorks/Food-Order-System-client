import React, { useState } from 'react';
import { FaMoneyBill, FaUtensils, FaStar, FaDrumstickBite } from 'react-icons/fa';

function MenuContainer({ data }) {
  // Determine the color and icon based on the type
  const typeColor = data?.type === 'Vegeterian' ? 'text-green-600' : 'text-red-600';
  const typeIcon = data?.type === 'Vegeterian' ? <FaStar className="text-yellow-400 inline-block" /> : <FaDrumstickBite className="text-red-600 inline-block" />;

  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    setCount(count + 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
        <img className="w-full" src={data?.image} alt="image" />
        <div className="px-4 py-3">
          {/* Display star icon after dish name if it's featured */}
          <div className="font-bold text-lg mb-1 text-gray-800 flex items-center">
            {data?.name}
            {data?.isFeatured && <FaStar className="text-yellow-400 ml-2" />}
          </div>
          <p className="text-sm text-gray-700 mb-2">{data?.description}</p>
          <div className='flex justify-between'>
            <div className="flex items-center">
              <FaMoneyBill className={`mr-2`} />
              <p className="text-gray-700 text-base">{data?.amount}</p>
            </div>
            <div className={`bg-opacity-25 bg-gray-100 rounded-lg px-3 py-1 ${typeColor} flex items-center`}>
              <FaUtensils className={`mr-2 ${typeColor}`} />
              <p className={`${typeColor} text-base font-semibold`}>{data?.type}</p>
            </div>
          </div>
          <div className='flex justify-end items-center'>
            {count === 0 ? (
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105" onClick={handleAddToCart}>
                Add to Cart
              </button>
            ) : (
              <div className="flex items-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded" onClick={handleDecrement}>-</button>
                <p className="mx-2">{count}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded" onClick={handleIncrement}>+</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuContainer;
