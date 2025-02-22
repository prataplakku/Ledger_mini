import React from "react";
import {
  BiSearch,
  BiBasketball,
  BiLineChartDown,
  BiLayout,
  BiPaste,
  BiSolidMagicWand,
  BiListCheck,
} from "react-icons/bi";
import { MdBalance } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { LuCircleHelp } from "react-icons/lu";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import "../styles/sidebar.css";
import image from "../assets/photo.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">

    <div className="top-section">
             {/* Logo & Collapse Button */}
      <div className="logo-bar">
        <div className="logo">
          <BiBasketball className="logo-icon" />
          <h2>Testing</h2>
        </div>
        <div className="collapse">
        <TbLayoutSidebarLeftCollapse/>
        </div>
        
      </div>

      {/* Search Box */}
      <div className="search-box">
        <BiSearch className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>

      {/* Menu Items */}
      <h3 className="section-title">FINANCIAL CLOSE</h3>
      <div className="menu-list">
        <a href="#" className="menu-item active">
          <BiLayout className="icon" />
          <span>Overview</span>
        </a>
        <a href="#" className="menu-item">
          <BiListCheck className="icon" />
          <span>Checklist</span>
        </a>
        <a href="#" className="menu-item">
          <MdBalance className="icon" />
          <span>Reconcile</span>
        </a>
        <a href="#" className="menu-item">
          <BiLineChartDown className="icon" />
          <span>Flux Analysis</span>
        </a>
        <a href="#" className="menu-item">
          <BiPaste className="icon" />
          <span>Reports</span>
        </a>
        <a href="#" className="menu-item">
          <BiSolidMagicWand className="icon" />
          <span>AI Assistant</span>
        </a>
      </div>


        </div>
     
      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="bottom-options">
          <a href="#" className="menu-item">
            <VscSettings className="icon" />
            <span>Settings</span>
          </a>
          <a href="#" className="menu-item">
            <LuCircleHelp className="icon" />
            <span>Help</span>
          </a>
        </div>

        {/* Profile Section */}
        <div className="profile">
          <img src={image} alt="Profile" />
          <div className="profile-details">
            <h4 className="profile-name">Prathap Reddy</h4>
            <span className="profile-email">prathap@fincore.ai</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
