//import useState hook to create menu collapse state
import React, { useState } from "react";
// import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PersonIcon from '@material-ui/icons/Person';// import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import Modal from 'react-modal';
import {Link} from 'react-router-dom'


//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css";
import AddOperator from "./AddOperator";
import Login from "./Login";

import img from './news.png'; 


const Sidebar = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              {/* <p>{menuCollapse ? "Logo" : "Big Logo"}</p> */}
              <p><img width="150" src={img}/> </p>
              <Menu iconShape="square">

                <MenuItem active={true} icon={<PersonIcon/>}><span ><Login/>登入</span></MenuItem>
                <MenuItem active={true} icon={<PersonIcon/>}><span ><Login/>註冊</span></MenuItem>


              </Menu>
            </div>

          </SidebarHeader>
          <SidebarContent>

            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                Home
              </MenuItem>


              <MenuItem active={true} icon={<TouchAppIcon/>}>台灣</MenuItem>
              <MenuItem active={true} icon={<TouchAppIcon/>}>國際</MenuItem>
              <MenuItem active={true} icon={<TouchAppIcon/>}>體育</MenuItem>
              <MenuItem active={true} icon={<TouchAppIcon/>}>Covid-19</MenuItem>

              {/* <MenuItem active={true} icon={<RiPencilLine />}><span><Link to={/Notifications/}>Notifications</Link></span></MenuItem> */}
              <MenuItem active={true} icon={<PersonIcon/>}><span ><AddOperator/>新增一條新聞</span></MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
          
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;