import React from "react";
import '../styles/menuItem.css'

const MenuItem = ({ text, Icon, isCollapsed }) => {
  return (
    <div className={ isCollapsed ? "menu-collapsed" : "menu-item"}>
      {<Icon className={isCollapsed ? "collapsed-icon" : "icon"} />}
      {!isCollapsed && <span className="menu-text">{text}</span>}
    </div>
  );
};

export default MenuItem;
