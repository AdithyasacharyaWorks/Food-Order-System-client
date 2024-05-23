import { FaRupeeSign } from "react-icons/fa";
import { addItem } from "../Redux/Slices/slice1";
import { useDispatch } from "react-redux";

function FeaturedContainer({ data }) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItem(data));
  };
  return (
    <div className="bg-white p-2 rounded-xl shadow-md w-60">
      <img
        src={data?.image}
        alt="image"
        className="w-full h-24 object-cover rounded-t-xl"
      />
      <div className="flex  justify-between items-start  mt-2 gap-2 relative">
        <h3 className="text-lg">{data?.name}</h3>
        <p className="text-gray-700 font-bold flex items-center justify-center">
          <FaRupeeSign />
          {data?.amount}
        </p>
      </div>
      <button
        className="block bg-gray-800 text-white font-bold py-1 px-3 rounded mx-auto mt-2 rounded-tl-xl rounded-br-xl"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default FeaturedContainer;
