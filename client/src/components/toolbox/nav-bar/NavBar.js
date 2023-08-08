import {Link} from "react-router-dom";
import React, { useState } from 'react';
import "./NavBar.css";
import mode from './images/Moon.png'
import profileImage from './images/Profile.png';
import logImage from './images/Logo.png';
import menu from './images/Hamburger.png';
import { PhoneSideMenu } from "../phone-size-sideMenu/PhoneSideMenu";
import { useEffect } from "react";

export function NavBar(props){

    const [sideMenu, setSideMenu] = useState(false);
    const [showHamburger, setShowHamburger] = useState(true);
    function showSideMenu(){
        setSideMenu(true);
        setShowHamburger(false); 
    }

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 700) {
          setSideMenu(false); 
          setShowHamburger(false); 
        } else {
          setShowHamburger(true); 
        }
      };
  
      handleResize(); 
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  


    return(<nav>
                <div className="nav-container">
                    <Link to="/" className="nav-link nav-left-container">
                            <img src={logImage} alt="logo" style={{width: '41.4px', height: '28.016px'}}/>
                            <h2>InternConnect</h2>
                    </Link>
                    <div className="nav-right-container">
                        <Link to="/communities" className="nav-link">
                        <button className={props.navButtonSelection==="communities" ? 'selected-nav-Button' : ''}>Communities</button>
                        </Link>
                        <Link to="/resume-builder" className="nav-link"><button className={props.navButtonSelection==="resumeBuilder" ? 'selected-nav-Button' : ''}>Resume Builder</button></Link>
                        <Link to="/resources" className="nav-link"><button className={props.navButtonSelection==="resources" ? 'selected-nav-Button' : ''}>Resources</button></Link>
                        {/* <button><img src={mode} alt="mode switching" className="mode-icon nav-link" style={{ width: "24px", height: "24px"}}/></button> */}
                        <Link to="/profile"><img src={profileImage} alt="profile" className="profile-pic nav-link" style={{ width: "48px", height: "48px"}}/></Link>
                    </div>
                </div>
                <div className="nav-small-container">
                    {showHamburger ? <button className="hambuger-container" onClick={showSideMenu}> <img src={menu} alt="menu button" style={{width: '60px', height: '60px'}}/></button> : <div style={{width: '60px', height: '60px', backgroundColor:'transparent'}}></div>}
                    <Link to="/profile"><img src={profileImage} alt="profile" className="profile-pic nav-link" style={{ width: "48px", height: "48px"}}/></Link>
                </div>
                
                { sideMenu ? (<div className="side-menu-container"><PhoneSideMenu/></div>) : (<></>)}
                
        </nav>);
}
