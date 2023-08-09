import { NavBar } from "../toolbox/nav-bar/NavBar";
import { SideMenu } from "../toolbox/sideMenu/SideMenu.js";
import "./ResumeBuilder.css";
import plusIcon from "../toolbox/images/add.png";
// import MyDocument from "./generate-pdf";
import React, { useState } from "react";
import { ResumeBuilderBody } from "./ResumeBuilderBody";

function ResumeBuilder() {
  let sideMenuRowArr = [
    ["Profile", null],
    ["Education", null],
    ["Experiences", null],
    ["Projects", null],
    ["Languages", null],
    ["Tools", null],
  ];

  return (
    <>
      <NavBar navButtonSelection="resumeBuilder" />
      <div className="sideBar-Body-container">
        <SideMenu header="Resume Builder" rowsArr={sideMenuRowArr} />
        <div className="form-Body-container">
          <ResumeBuilderBody />
        </div>
      </div>
    </>
  );
}

export { ResumeBuilder };
