import { FaAngleRight } from 'react-icons/fa';

function CatogoryContainer({data}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-300">
      <div className="flex justify-between items-center px-4 py-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{data?.category}</h3>
          <p className="text-sm text-blue-600">Number of Items: 10</p>
        </div>
        <FaAngleRight className="text-gray-600" />
      </div>
    </div>
  );
}

export default CatogoryContainer;
