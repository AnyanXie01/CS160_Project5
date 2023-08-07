import CareerExperienceIcon from "../images/Career-Exprience.png";
import { BodyHeader } from "../../toolbox/header/BodyHeader.js";
import { CreatePost } from "./CreatePost";
import { Post } from "./Post";
export function CareerExperience(){
    let description = "A forum for industry professionals to share career insights and for Computer Science students to understand real-world job experiences. A platform for questions, advice, and understanding career paths in tech. Explore firsthand accounts that shape the industry.";
    let titleArr = [CareerExperienceIcon, "Career Experience", description];
    return <>
                <BodyHeader titleArr={titleArr}/>
                <CreatePost/>
                <Post/>
            </>
}
