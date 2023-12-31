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
    <button
      className="finish-button"
      onClick={handleFinishClick}
      aria-label="Preview PDF"
    >
      Preview PDF
    </button>
  );
}

function ResumeBuilder() {
  let sideMenuRowArr = [
    ["Profile", null, "profile-section"],
    ["Education", null, "education-section"],
    ["Experiences", null, "experience-section"],
    ["Projects", null, "project-section"],
    ["Languages", null, "language-section"],
    ["Tools", null, "tool-section"],
  ];
  const [showPDF, setShowPDF] = useState(false);
  const [allExtractedData, setAllExtractedData] = useState({});

  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const scrollToSection = (id, offset = 0) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      const currentScrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      window.scrollTo({
        top: currentScrollPosition + offset,
        behavior: "smooth",
      });
    }
  };

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
      {!localStorage.getItem("loggedIn")
        ? (window.location.href = "http://localhost:3000/login")
        : null}
      <NavBar navButtonSelection="resumeBuilder" />
      <div className="sideBar-Body-container">
        <SideMenu
          header="Resume Builder"
          rowsArr={sideMenuRowArr}
          // scrollToSection={scrollToSection}
        />
        <div className="form-Body-container">
          <div className="content">
            <ResumeBuilderBody
              setShowPDF={setShowPDF}
              setAllExtractedData={setAllExtractedData}
            />
            <FinishButton setShowPDF={setShowPDF} />
          </div>
        </div>
      </div>
    </>
  );
}

export { ResumeBuilder };
