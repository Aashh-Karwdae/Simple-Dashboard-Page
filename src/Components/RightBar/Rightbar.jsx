import Overview from "../OverViewComponent/Overview";
import Product from "../PrdodctCompo/Product";
import Secondiv from "../SecondDiv/Secondiv";
import "./Rightbar.css";
import { FiSearch } from "react-icons/fi";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="Header">
        <h2 className="sidebarTitle">Hello From Ashwin 👋🏻,</h2>
        <div className="searchbar">
          <FiSearch className="searchIcon" />
          <input type="text" placeholder="Search" className="searchname" />
        </div>
      </div>
      <Secondiv />
      <Overview />
      <Product />
    </div>
  );
}
