import { useEffect, useState } from "react"
import FeaturedContainer from "../Components/FeaturedContainer"
import axios from "axios"

function Featured() {

  const [menu,setMenus] = useState([])

  useEffect(()=>{
    axios.get('https://food-ordering-system-admin.vercel.app/api/getFeaturedMenus')
    .then((res)=>
      {
        setMenus(res.data.responseData)
      }
    )
  },[])
  return (
    <div className="mt-5">
        <div className="flex overflow-x-auto gap-3 p-2">
          {menu?.map((ele,index)=>{
            return(
              <FeaturedContainer key={index} data={ele}/>
            )
          })}
            <FeaturedContainer />
            <FeaturedContainer />
            <FeaturedContainer />
            <FeaturedContainer />
            <FeaturedContainer />
            <FeaturedContainer />
            <FeaturedContainer />
        </div>
    </div>
  )
}

export default Featured