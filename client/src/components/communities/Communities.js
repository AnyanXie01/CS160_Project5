import { NavBar } from "../toolbox/nav-bar/NavBar.js"
import { SideMenu } from "../toolbox/sideMenu/SideMenu.js";
import ProjectCollabIcon from "./images/Project-Collab.png";
import MentorshipIcon from "./images/Mentorship.png";
import PeerInterviewIcon from "./images/Peer-Interview.png";
import CareerExperienceIcon from "./images/Career-Exprience.png";
import { showProjectCollab, showCareerExperience, showMentorship,  showPeerInterview } from "../../feature/community-body/communitybodySlice.js";
import {CommunityBody} from "../../feature/community-body/CommunityBody.js";
export function Communities(){
    let sideMenuRowArr = [['Project Collaboration', ProjectCollabIcon, showProjectCollab], ['Career Exprience', CareerExperienceIcon, showCareerExperience], ['Mentorship', MentorshipIcon, showMentorship], ['Peer Interviews', PeerInterviewIcon, showPeerInterview]];
    return ( <>
                <NavBar navButtonSelection="communities" header="Communities" rowsArr={sideMenuRowArr}/>
                <div className="sideBar-Body-container">
                    <SideMenu header="Communities" rowsArr={sideMenuRowArr}/>
                    <CommunityBody/>
                </div>
            </>
            )
}