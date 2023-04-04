import React from 'react'
import {Link} from "react-router-dom";
import "../styles/HotAccessoriesMenu.css";
const HotAccessoriesMenu = () => {
  return (
    <div className='HotAccessoriesMenu'>
      <Link className="HotAccessoriesMenu" to="/music"></Link>
      <Link className="HotAccessoriesMenu" to="/music"></Link>
      <Link className="HotAccessoriesMenu" to="/music"></Link>
      <Link className="HotAccessoriesMenu" to="/music"></Link>
      <Link className="HotAccessoriesMenu" to="/music"></Link>
    </div>
  )
}

export default HotAccessoriesMenu
