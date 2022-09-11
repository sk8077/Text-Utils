import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuApi.js"
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

const Restaurant = () => {
  // const myStyle={color:"green"} //for includeing css using Objects

  // use-state Hooks-> can hold data for managing data i the react app or state management
  // returns array of 2 elements ,[stateVariable, uptadetedFunction]
  //it should be first data in functional component
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  
  // console.log(uniqueList)

  const filterItem = (category) => {
    if(category==="All"){
      setMenuData(Menu)
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList)
  }

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant