import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MenuContainer from '../Components/MenuContainer'

function MenuList() {
    const [menu,setMenu] = useState([])
    useEffect(()=>{
        axios.get('https://food-ordering-system-admin.vercel.app/api/menu')
        .then((res)=>{
            setMenu(res?.data?.responseData)
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mt-5">
        {menu.length>0 ?menu.map((ele,index)=>{
            return(
                <div key={index} className="flex justify-center">
                        <MenuContainer data={ele}/> 
                </div> 
            )
        }):<h1>Loading ....</h1>}
        
    </div>
  )
}

export default MenuList