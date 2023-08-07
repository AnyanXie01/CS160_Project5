import "./SampleResumes.css";
import SampleResumeIcon from "../images/icons/sampleresume.png";
import LinkIcon from "../images/icons/link arrow.png";

function Resume({ position, file }) {
  return (
    <button className="resume-button" onClick={() => window.open(file)}>
      <p>{position}</p>
      <img className="small-icon" src={LinkIcon}></img>
    </button>
  );
}

const resumes = [
  { position: "AI Engineer", file: "" },
  { position: "IT Project Manager", file: "" },
  { position: "Blockchain Developer", file: "" },
  { position: "IT Support Specialist", file: "" },
  { position: "Business Intelligence Analyst", file: "" },
  { position: "Machine Learning Engineer", file: "" },
  { position: "Cloud Engineer", file: "" },
  { position: "Mobile App Developer", file: "" },
  { position: "Computer Vision Engineer", file: "" },
  { position: "Network Administrator", file: "" },
  { position: "Cybersecurity Analyst", file: "" },
  { position: "Quality Assurance (QA) Engineer", file: "" },
  { position: "Data Scientist", file: "" },
  { position: "Research Scientist", file: "" },
  { position: "Database Administrator", file: "" },
  { position: "Software Developer", file: "" },
  { position: "DevOps Engineer", file: "" },
  { position: "Systems Analyst", file: "" },
  { position: "Embedded Systems Developer", file: "" },
  { position: "Technical Writer", file: "" },
  { position: "Game Developer", file: "" },
  { position: "UX/UI Designer", file: "" },
  { position: "IoT Developer", file: "" },
  { position: "Web Developer", file: "" },
];

export function SampleResumes() {
  return (
    <div className="content">
      <div className="title">
        <img
          className="title-icon"
          src={SampleResumeIcon}
          alt="Sample Resume Icon"
        ></img>
        <h1>Sample Resumes</h1>
      </div>
      <div className="sample-resume-container">
        {resumes.map((resume, index) => (
          <Resume key={index} position={resume.position} file={resume.file} />
        ))}
      </div>
    </div>
  );
}
export default SampleResumes;
