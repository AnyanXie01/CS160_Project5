import "./SampleResumes.css";
import SampleResumeIcon from "../images/icons/sampleresume.png";
import LinkIcon from "../images/icons/link arrow.png";
import { BodyHeader } from "../../toolbox/header/BodyHeader";

function Resume({ position, file }) {
  return (
    <button className="resume-button" onClick={() => window.open(file)}>
      <p>{position}</p>
      <img className="small-icon" src={LinkIcon}></img>
    </button>
  );
}

const resumeCollection = [
  {
    header: "Artificial Intelligence & Machine Learning",
    resumes: [
      {
        position: "AI Engineer",
        file: "/sampleresumes/AI_Engineer_Sample_Resume.pdf",
      },
      {
        position: "Machine Learning Engineer",
        file: "/sampleresumes/ML_Engineer_Sample_Resume.pdf",
      },
      {
        position: "Data Scientist",
        file: "/sampleresumes/Data_Scientist_Sample_Resume.pdf",
      },
      {
        position: "Computer Vision Engineer",
        file: "/sampleresumes/Computer_Vision_Engineer_Sample_Resume.pdf",
      },
      {
        position: "Research Scientist",
        file: "/sampleresumes/Research_Scientist_Sample_Resume.pdf",
      },
    ],
  },
  {
    header: "Software & Application Development",
    resumes: [
      {
        position: "Software Developer",
        file: "/sampleresumes/Software_Developer_Sample_Resume.pdf",
      },
      {
        position: "Mobile App Developer",
        file: "/sampleresumes/Mobile_App_Developer_Sample_Resume.pdf",
      },
      {
        position: "Web Developer",
        file: "/sampleresumes/Web_Developer_Sample_Resume.pdf",
      },
      {
        position: "IoT Developer",
        file: "/sampleresumes/IoT_Developer_Sample_Resume.pdf",
      },
      {
        position: "Blockchain Developer",
        file: "/sampleresumes/Blockchain_Developer_Sample_Resume.pdf",
      },
      {
        position: "Embedded Systems Developer",
        file: "/sampleresumes/Embedded_Systems_Developer_Sample_Resume.pdf",
      },
    ],
  },
  {
    header: "Infrastructure & Systems",
    resumes: [
      {
        position: "IT Support Specialist",
        file: "/sampleresumes/IT_Support_Specialist_Sample_Resume.pdf",
      },
      {
        position: "Cloud Engineer",
        file: "/sampleresumes/Cloud_Engineer_Sample_Resume.pdf",
      },
      {
        position: "Network Administrator",
        file: "/sampleresumes/Network_Administrator_Sample_Resume.pdf",
      },
      {
        position: "Systems Analyst",
        file: "/sampleresumes/Systems_Analyst_Sample_Resume.pdf",
      },
      {
        position: "DevOps Engineer",
        file: "/sampleresumes/DevOps_Engineer_Sample_Resume.pdf",
      },
      {
        position: "Database Administrator",
        file: "/sampleresumes/Database_Administrator_Sample_Resume.pdf",
      },
    ],
  },
  {
    header: "Management & Strategy",
    resumes: [
      {
        position: "IT Project Manager",
        file: "/sampleresumes/IT_Project_Manager_Sample_Resume.pdf",
      },
      {
        position: "Business Intelligence Analyst",
        file: "/sampleresumes/BI_Analyst_Sample_Resume.pdf",
      },
    ],
  },
  {
    header: "Security & Compliance",
    resumes: [
      {
        position: "Cybersecurity Analyst",
        file: "/sampleresumes/Cybersecurity_Analyst_Sample_Resume.pdf",
      },
    ],
  },
  {
    header: "Quality & Testing",
    resumes: [
      {
        position: "Quality Assurance (QA) Engineer",
        file: "/sampleresumes/QA_Engineer_Sample_Resume.pdf",
      },
    ],
  },
  {
    header: "Design & User Experience",
    resumes: [
      {
        position: "UX/UI Designer",
        file: "/sampleresumes/UX_UI_Designer_Sample_Resume.pdf",
      },
    ],
  },
  {
    header: "Documentation & Communication",
    resumes: [
      {
        position: "Technical Writer",
        file: "/sampleresumes/Technical_Writer_Sample_Resume.pdf",
      },
      {
        position: "Game Developer",
        file: "/sampleresumes/Game_Developer_Sample_Resume.pdf",
      },
    ],
  },
];

export function SampleResumes() {
  let titleArr = [SampleResumeIcon, "Sample Resumes", ""];

  return (
    <div className="content">
      <BodyHeader titleArr={titleArr} />
      <div className="sample-resume-container">
        {resumeCollection.map((section, index) => (
          <>
            <h1>{section.header}</h1>
            <div className="section-container">
              {section.resumes.map((res, index) => (
                <Resume key={index} position={res.position} file={res.file} />
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
export default SampleResumes;
