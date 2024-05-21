import CatogoryContainer from "../Components/CatogoryContainer";
import { useEffect, useState } from "react";
import axios from "axios";

function Catogory() {

  const [catogory, setCatogory] = useState([])

  useEffect(()=>{
    axios.get('https://food-ordering-system-admin.vercel.app/api/getCategories')
    .then((res)=>{
      setCatogory(res?.data?.responseData)
    })
    .catch((err)=>{
        console.log(err)
    })
},[])
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3">
          {catogory.map((ele,index)=>{
            return(
              <CatogoryContainer key={index} data={ele}/>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Catogory;
