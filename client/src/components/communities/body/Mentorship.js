import MentorshipIcon from "../images/Mentorship.png";
import { BodyHeader } from "../../toolbox/header/BodyHeader.js";
import { CreatePost } from "./CreatePost";

export function Mentorship(){
    let description="A networking hub for Computer Science students and industry professionals to establish mentor-mentee relationships, fostering direct connections and supporting professional growth.";
    let titleArr = [MentorshipIcon, "Mentorship", description];
    return <><BodyHeader titleArr={titleArr}/>
            <CreatePost/>
            </>
}