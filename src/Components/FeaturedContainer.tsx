import React from 'react';

function FeaturedContainer({ data }) {
  return (
    <div className="bg-white p-2 rounded-xl shadow-md w-60">
      <img src={data?.image} alt="image" className="w-full h-24 object-cover rounded-t-xl" />
      <div className="flex justify-between items-center mt-2">
        <h3 className="text-lg font-semibold">{data?.name}</h3>
        <p className="text-gray-700">{data?.amount}</p>
      </div>
      <button className="block bg-gray-800 text-white font-bold py-1 px-3 rounded mx-auto mt-2 rounded-tl-xl rounded-br-xl" >
        Add to Cart
      </button>
    </div>
  );
}

export default FeaturedContainer;
