import React, { useEffect, useState } from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from './Navbar';

const uniqueList = [...new Set(Menu.map(curElem => curElem.category)), "All"];

console.log(uniqueList);


const Restaurant = () => {

  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList)

  const filterItem = (category) => {

    if (category === "All") {
      setMenuData(Menu);
      return
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  }


  useEffect(() => {
    document.title = "Food App"
  }, [])

  return (
    <>
      <div className="main-box-restaurant">
        <Navbar filterItem={filterItem} menuList={menuList} />
        <MenuCard menuDatas={menuData} />
      </div>
    </>
  )
}

export default Restaurant;