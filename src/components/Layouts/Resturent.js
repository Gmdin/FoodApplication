 import { useState } from "react";
import Card from "../Card/Card";
import Menu from "../Menu/MenuApi";
 
 const Resturent=()=>{
    const [menuData,setMenuData]=useState(Menu);
    console.log(menuData);
    return(
        <>
        <Card  dumyData={menuData}/>
        </>
    );
 }
 export default Resturent;