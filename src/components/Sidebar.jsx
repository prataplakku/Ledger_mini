import React, {useState} from "react";
import BackShadow from '../assets/images/sidebar-shadow.png'
import Logo from "../assets/icons/Logo";
import CloseToggle from "../assets/icons/CloseToggle";
import OpenToggle from "../assets/icons/OpenToggle";
import { Search } from "lucide-react";
import AiAssistantIcon from '../assets/icons/AiAssistantIcon'
import ChecklistIcon from "../assets/icons/Checklist";
import FluxAnalysisIcon from "../assets/icons/FluxAnalysisIcon";
import HelpIcon from "../assets/icons/helpIcon";
import OverviewIcon from "../assets/icons/OverviewIcon";
import ReconcileIcon from "../assets/icons/ReconcileIcon";
import ReportIcon from "../assets/icons/ReportIcon";
import SettingIcon from "../assets/icons/SettingIcon";
import "../styles/sidebar.css";
import image from "../assets/photo.jpg";
import MenuItem from "./MenuItem"



const MenuList = [
  {
    id: 1,
    title: "Overview",
    Icon: OverviewIcon,
  },
  {
    id: 2,
    title: "Checklist",
    Icon: ChecklistIcon,
  },
  {
    id: 3,
    title: "Reconcile",
    Icon: ReconcileIcon,
  },
  {
    id: 4,
    Icon: FluxAnalysisIcon,
    title: "Flux Analysis ",
  },
  {
    id: 5,
    Icon: ReportIcon,
    title: "Reports"
  },
  {
    id: 6,
    Icon: AiAssistantIcon,
    title: "AI Assistant",

  },
];

const BottomMenu = [{
  id: 1,
  title: "Settings",
  url: "#",
  Icon: SettingIcon,
  isActive: true,
  path: "",
},
{
  id: 2,
  title: "Help",
  url: "#",
  Icon: HelpIcon,
  isActive: true,
  path: "",
},]


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const user = {
    name: "Prathap Reddy",
    email: "prathap@fincore.ai",
    company_name: "Fincore",
  };

  return (
    <div className="sidebar-dashboard">
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <div className="logo-container">
            <Logo className={isOpen ? "logo" : "logo-small"} />
            {isOpen && <span>{user.company_name}</span>}
          </div>

          {isOpen && (
            <div className="close-toggle-icon" onClick={() => setIsOpen(!isOpen)}>
              <CloseToggle />
            </div>
          )}
        </div>

        {/* Search Box */}
        {isOpen ? (
          <div className="search-box">
            <Search className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>
        ): <OpenToggle className="open-toggle-icon" onClick={() => setIsOpen(!isOpen)} />}

        {/* Section Title */}
        {isOpen && <div className="section-title">FINANCIAL CLOSE</div>}

        {/* Sidebar Menu */}
        <div className="sidebar-content">
          <div className="menu-top-content">
            <div className="menu-group">
              {MenuList.map((item, idx) => (
                <MenuItem key={idx} text={item.title} Icon={item.Icon} isCollapsed={!isOpen} />
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bottom-section">
            <div className="bottom-options">
              <div className="menu-group">
                {BottomMenu.map((item, idx) => (
                  <MenuItem key={idx} text={item.title} Icon={item.Icon} isCollapsed={!isOpen} />
                ))}
              </div>
            </div>

            {/* Profile Section */}
            <div className="profile">
              <img src={image} alt="Profile" className="profile-image" />
              {isOpen && (
                <div className="profile-details">
                  <h4 className="profile-name">{user.name}</h4>
                  <span className="profile-email">{user.email}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
