import Header from './Header';

function Cart() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header from={"cart"}/>

      <div className="flex-1 bg-gray-100">
        {/* Cart content */}
        <div className="container mx-auto py-8">
          {/* Cart items */}
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Cart items list */}
            {/* Replace with your cart items */}
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <div>Item 1</div>
              <div>$10.00</div>
            </div>
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <div>Item 2</div>
              <div>$15.00</div>
            </div>
            {/* Total */}
            <div className="font-bold text-xl mb-4">Total: $25.00</div>
            {/* Checkout button */}
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
