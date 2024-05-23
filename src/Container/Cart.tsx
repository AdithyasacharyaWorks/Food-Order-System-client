import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../Redux/Slices/slice1";
import { Client, ID } from "appwrite";

import { dbid, col_id, database, client } from "../Appwrite/index";
import { useState } from "react";

function Cart() {
  // Mock cart items
  const cartItems = useSelector((state) => state?.cartReducer?.cartItem);
  const dispatch = useDispatch();
  const [docId, setDocId] = useState("");

  const handleIncrease = (item) => {
    dispatch(addItem(item));
  };

  const handledecrease = (item) => {
    console.log(item);
    dispatch(removeItem(item.id));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.amount) * item.quantity,
    0,
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header from="cart" />

      <div className="flex-1 bg-gray-100">
        <div className="container mx-auto py-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-4 mb-4"
              >
                <img
                  src={item.image}
                  alt="Item"
                  className=" w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                </div>
                <div>
                  <p className="text-gray-700">
                    Rs{(parseFloat(item.amount) * item.quantity).toFixed(2)}
                  </p>
                  <div className="flex items-center mt-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-l"
                      onClick={() => handledecrease(item)}
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-r"
                      onClick={() => handleIncrease(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="font-bold text-xl mb-4">
              Total: Rs{totalPrice.toFixed(2)}
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
