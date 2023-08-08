import communitiesIcon from "./images/non-selected-images/Community.png";
import ResourcesIcon from "./images/non-selected-images/Resources.png";
import ResumeBuilderIcon from "./images/non-selected-images/ResumeBuilder.png";
import {Link} from "react-router-dom";

export function PhoneSideMenu(props){
    return <div className="phone-side-menu">
        <div className="left-col-containers">
            <Link to="/communities" className="nav-link"><button className={props.navButtonSelection==="communities" ? 'selected-nav-Button' : ''}><img src={communitiesIcon} style={{width: "25px", heigth: "25px"}}/></button></Link>
            <Link to="/resume-builder" className="nav-link"><button className={props.navButtonSelection==="resumeBuilder" ? 'selected-nav-Button' : ''}><img src={ResourcesIcon} style={{width: "25px", heigth: "25px"}}/></button></Link>
            <Link to="/resources" className="nav-link"><button className={props.navButtonSelection==="resources" ? 'selected-nav-Button' : ''}><img src={ResumeBuilderIcon} style={{width: "25px", heigth: "25px"}}/></button></Link>
        </div>
    </div>;
}