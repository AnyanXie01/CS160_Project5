import React, { useState } from "react";
import { NavBar } from "../toolbox/nav-bar/NavBar";
import { SideMenu } from "../toolbox/sideMenu/SideMenu.js";
import "./ResumeBuilder.css";
import { ResumeBuilderBody } from "./ResumeBuilderBody";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./generate-pdf";

export function FinishButton({ setShowPDF }) {
  const handleFinishClick = (event) => {
    event.preventDefault();
    console.log("clicked!");
    setShowPDF(true);
  };

  return (
    <button className="finish-button" onClick={handleFinishClick}>
      Preview PDF
    </button>
  );
}

function ResumeBuilder() {
  let sideMenuRowArr = [
    ["Profile", null],
    ["Education", null],
    ["Experiences", null],
    ["Projects", null],
    ["Languages", null],
    ["Tools", null],
  ];
  const [showPDF, setShowPDF] = useState(false);
  const [allExtractedData, setAllExtractedData] = useState({});

  if (showPDF) {
    const MyResume = (
      <MyDocument
        profile={allExtractedData.profile}
        education={allExtractedData.education}
        experience={allExtractedData.experience}
        project={allExtractedData.project}
        language={allExtractedData.language}
        tool={allExtractedData.tool}
      />
    );

    return (
      <PDFViewer style={{ width: "100vw", height: "100vh" }}>
        {MyResume}
      </PDFViewer>
    );
  }

  return (
    <>
      <NavBar navButtonSelection="resumeBuilder" />
      <div className="sideBar-Body-container">
        <SideMenu header="Resume Builder" rowsArr={sideMenuRowArr} />
        <div className="form-Body-container">
          <ResumeBuilderBody
            setShowPDF={setShowPDF}
            setAllExtractedData={setAllExtractedData}
          />
          <FinishButton setShowPDF={setShowPDF} />
        </div>
      </div>
    </>
  );
}

export { ResumeBuilder };
