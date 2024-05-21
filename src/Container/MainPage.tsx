import { useState } from 'react';
import Catogory from './Catogory';
import Featured from './Featured';
import Footer from './Footer';
import Header from './Header';
import MenuList from './MenuList';
import { FaStar }from 'react-icons/fa';

function MainPage() {
  const [clickedOnCatogory, setClickedOnCatogory] = useState(false);
  return (
    <div className="flex flex-col h-screen">
      {/* Sticky header with primary color */}
      <Header className="sticky top-0 z-50 bg-blue-600 text-white" from={"home"} />

      {/* Container for featured section with constant heading */}
      <div className="bg-gray-100 p-2">
        <div className="bg-gray-800 rounded-tl-xl rounded-br-xl   px-4 py-2 flex gap-2 items-center ">
          <h2 className="text-lg font-semibold text-white">Featured </h2>
          <FaStar color='gold'/>
        </div>
        <Featured />
      </div>

      {/* Container for category list heading with secondary color */}
      <div className='p-2'>
      <div className="bg-gray-800 px-4 py-2 rounded-tl-xl rounded-br-xl">
        <h2 className="text-lg font-semibold text-white">Category List</h2>
      </div>
      </div>

      {/* Container for category section with scrollable content */}
      <div className="flex-1 overflow-y-auto">
        <Catogory />
      </div>

      {/* Sticky footer with footer color */}
      {/* <div className="sticky bottom-0 p-5 bg-red-600 text-white">
        <Footer />
      </div> */}
    </div>
  );
}

export default MainPage;
