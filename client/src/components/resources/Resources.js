import { NavBar } from "../toolbox/nav-bar/NavBar.js";
import { SideMenu } from "../toolbox/sideMenu/SideMenu.js";
import DataAlgoIcon from "./images/Data-Algo.png";
import InternSearchIcon from "./images/Intern-Search.png";
import SampleResumeIcon from "./images/Sample-Resumes.png";
import {
  showDataAlgo,
  showInternSearch,
  showSampleResume,
} from "../../feature/resources-body/resourcesbodySlice.js";
import { ResourcesBody } from "../../feature/resources-body/ResourceBody.js";
import "./Resources.css";
export function Resources() {
  // a array of [row-content, icon image for the row content, reducer matched to that row]
  let sideMenuRowArr = [
    ["Data Structures and Algorithms", DataAlgoIcon, showDataAlgo],
    ["Internship Search", InternSearchIcon, showInternSearch],
    ["Sample Resumes", SampleResumeIcon, showSampleResume],
  ];
  return (
    <>
      <NavBar navButtonSelection="resources" />
      <div className="sideBar-Body-container">
        <SideMenu header="Resources" rowsArr={sideMenuRowArr} />
        <ResourcesBody />
      </div>
    </>
  );
}
