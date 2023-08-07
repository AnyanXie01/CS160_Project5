import { NavBar } from "../toolbox/nav-bar/NavBar";
import { SideMenu } from "../toolbox/sideMenu/SideMenu.js";
import "./Resume-Builder.css";
import plusIcon from '../toolbox/images/add.png';
import MyDocument from "./generate-pdf";
import React, { useState } from 'react';
import {ResumeBuilderBody} from "./ResumeBuilderBody.js";

function ResumeBuilder() {
    let sideMenuRowArr = [['Profile', null], ['Education', null], ['Work Experience', null], ['Project', null], ['Tool', null], ['Award', null], ['LeaderShip', null], ['Finish', null]];

    return (<>
        <NavBar navButtonSelection="resumeBuilder" />
        <div className="sideBar-Body-container">
            <SideMenu header="Resume Builder" rowsArr={sideMenuRowArr} />
            <ResumeBuilderBody />
        </div>
    </>

    )
}

export { ResumeBuilder }