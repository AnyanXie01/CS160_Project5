import PeerInterviewIcon from "../images/Peer-Interview.png";
import { BodyHeader } from "../../toolbox/header/BodyHeader.js";
import { CreatePost } from "./CreatePost";

export function PeerInterview(){
    let description = "Peer Interviews is a dedicated forum for students and professionals looking to hone their interview skills. Here, you can find like-minded peers to practice interviewing, share tips, and receive feedback. A valuable resource for improving your communication and interview prowess.";
    let titleArr = [PeerInterviewIcon, "Peer Interviews", description];
    return <><BodyHeader titleArr={titleArr}/>
            <CreatePost/>  
            </>;
}