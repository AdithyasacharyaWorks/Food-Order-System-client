import {FaCartArrowDown} from 'react-icons/fa'
import { Navigate,useNavigate } from 'react-router-dom';
import { useSelector, UseSelector } from 'react-redux';

function Header({from}) {
  const numberOfCartItem = useSelector(state =>state.cartReducer.totalItems)


  const navigate = useNavigate()
  const handleCartClick = ( ) =>{
    navigate('/cart', { replace: false });
    console.log("hre")
  }

  const handleHomeClick = () => {
    navigate('/', { replace: false });
  }
  return (
    <header className="sticky top-0 z-50 bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Logo</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-tl-xl rounded-br-xl relative">
          {from==="cart" && <div className='flex items-center gap-2 justify-center' onClick={handleHomeClick}>
            Home
           <FaCartArrowDown />
          </div>}
          {from!=="cart" && <div className='flex items-center gap-2 justify-center relative' onClick={handleCartClick} >
            
          Cart
           <FaCartArrowDown />
           <div className='flex w-7 h-7 rounded-full justify-center items-center bg-gray-800'>{numberOfCartItem}</div>
          </div>}
          
          </button>
      </div>
    </header>
  );
}

export default Header;
