import {FaCartArrowDown} from 'react-icons/fa'
function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Logo</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-tl-xl rounded-br-xl">
          <div className='flex items-center gap-2 justify-center'>
            Cart
           <FaCartArrowDown />
          </div>
          
          </button>
      </div>
    </header>
  );
}

export default Header;
