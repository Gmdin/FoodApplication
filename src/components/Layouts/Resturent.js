 import { useState } from "react";
import Card from "../Card/Card";
import Menu from "../Menu/MenuApi.js";
import Navbar from "../Navbar/Navbar";
const uniqueList = [
    ...new Set(
      Menu.map((curElem) => {
        return curElem.category;
      })
    ),
    "All",
  ];
 const Resturent=()=>{
    const [menuData,setMenuData]=useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);
    
    const filterItem=(catg)=>{
        if (catg === "All") {
            setMenuData(Menu);
            return;
          }
            const updatedFilter=menuData.filter((curr)=>{
                return curr.category===catg;
            })
            
    setMenuData(updatedFilter);
    }

    return(
        <>
        <Navbar category={menuList} filterByCatg={filterItem}/>
        <Card  dumyData={menuData}/>
        </>
    );
 }
 export default Resturent;