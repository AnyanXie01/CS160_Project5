import React, { useState } from "react";
import AddIcon from "./add.png";
import DeleteIcon from "./delete.png";
import "./ResumeBuilder.css";

export function Profile() {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    github: "",
  });

  const handleProfileInputChange = (event) => {
    const { name, value } = event.target;
    setProfileData((profileData) => ({ ...profileData, [name]: value }));
  };

  return (
    <div className="resume-section">
      <h1>Profile</h1>
      <div className="resume-input-container" style={{ paddingTop: 30 }}>
        <div className="input-container">
          <p>Name</p>
          <input
            type="text"
            name="name"
            value={profileData.name}
            placeholder="ChrisDeep"
            onChange={handleProfileInputChange}
          />
        </div>
        <div className="input-container">
          <p>Email</p>
          <input
            type="email"
            name="email"
            value={profileData.email}
            placeholder="chrisdeep@berkeley.edu"
            onChange={handleProfileInputChange}
          />
        </div>
        <div className="input-container">
          <p>GitHub Account</p>
          <input
            type="text"
            name="github"
            value={profileData.github}
            placeholder="github.com/chrisdeep"
            onChange={handleProfileInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export function Education() {
  const [eduData, setEduData] = useState({
    education: [
      {
        degree: "",
        institution: "",
        gpa: "",
        gradDate: "",
        coursework: "",
      },
    ],
  });
  const handleEducationInputChange = (index, event) => {
    const { name, value } = event.target;
    const newEducation = [...eduData.education];
    newEducation[index][name] = value;
    setEduData({ ...eduData, education: newEducation });
  };

  const addEducation = () => {
    setEduData({
      ...eduData,
      education: [
        ...eduData.education,
        {
          degree: "",
          institution: "",
          gpa: "",
          gradDate: "",
          coursework: "",
        },
      ],
    });
  };

  const deleteEducation = (index) => {
    const newEducation = [...eduData.education];
    newEducation.splice(index, 1);
    setEduData({ ...eduData, education: newEducation });
  };

  return (
    <div className="resume-section">
      <h1>Education</h1>
      {eduData.education.map((edu, index) => (
        <div className="resume-input-container" key={index}>
          <button
            className="delete-button"
            onClick={() => deleteEducation(index)}
          >
            <img className="icon" src={DeleteIcon}></img>
          </button>
          <div className="input-container">
            <p>Degree</p>
            <input
              type="text"
              name="degree"
              onChange={(event) => handleEducationInputChange(index, event)}
              placeholder="Bachelor of Science (B.S.) in Computer Science"
            />
          </div>

          <div className="input-container">
            <p>Institution</p>
            <input
              type="text"
              name="institution"
              onChange={(event) => handleEducationInputChange(index, event)}
              placeholder="React University"
            />
          </div>

          <div className="input-container">
            <p>GPA</p>
            <input
              type="text"
              name="gpa"
              onChange={(event) => handleEducationInputChange(index, event)}
              placeholder="3.8"
            />
          </div>

          <div className="input-container">
            <p>Expected Graduation Date</p>
            <input
              type="text"
              name="egd"
              onChange={(event) => handleEducationInputChange(index, event)}
              placeholder="May 2024"
            />
          </div>

          <div className="input-container">
            <p>Related Coursework</p>
            <input
              type="text"
              name="work"
              onChange={(event) => handleEducationInputChange(index, event)}
              placeholder="CS 61A, CS 61B"
            />
          </div>
        </div>
      ))}
      <button className="add-button" onClick={addEducation}>
        <img className="small-icon" src={AddIcon}></img>
        <p>Add an education</p>
      </button>
    </div>
  );
}

export function Experience() {
  const [userData, setUserData] = useState({
    experiences: [
      {
        position: "",
        company: "",
        location: "",
        startdate: "",
        enddate: "",
        responsibility1: "",
        responsibility2: "",
        responsibility3: "",
      },
    ],
  });
  const handleExperienceInputChange = (index, event) => {
    const { name, value } = event.target;
    const newExperiences = [...userData.experiences];
    newExperiences[index][name] = value;
    setUserData({ ...userData, experiences: newExperiences });
  };

  const addExperience = () => {
    setUserData({
      ...userData,
      experiences: [
        ...userData.experiences,
        {
          position: "",
          company: "",
          location: "",
          startdate: "",
          enddate: "",
          responsibility1: "",
          responsibility2: "",
          responsibility3: "",
        },
      ],
    });
  };

  const deleteExperience = (index) => {
    const newExperiences = [...userData.experiences];
    newExperiences.splice(index, 1);
    setUserData({ ...userData, experiences: newExperiences });
  };

  return (
    <div className="resume-section">
      <h1>Experiences</h1>
      {userData.experiences.map((exp, index) => (
        <div className="resume-input-container" key={index}>
          <button
            className="delete-button"
            onClick={() => deleteExperience(index)}
          >
            <img className="icon" src={DeleteIcon}></img>
          </button>
          <div className="input-container">
            <p>Position</p>
            <input
              type="text"
              name="position"
              placeholder="Software Engineering Intern"
              onChange={(event) => handleExperienceInputChange(index, event)}
            />
          </div>
          <div className="input-container">
            <p>Company</p>
            <input
              type="text"
              name="company"
              placeholder="Google"
              onChange={(event) => handleExperienceInputChange(index, event)}
            />
          </div>
          <div className="input-container">
            <p>City, State</p>
            <input
              type="text"
              name="location"
              placeholder="Sunnyvale, CA"
              onChange={(event) => handleExperienceInputChange(index, event)}
            />
          </div>
          <div className="input-container">
            <p>Start Date</p>
            <input
              type="text"
              name="startdate"
              placeholder="May 2023"
              onChange={(event) => handleExperienceInputChange(index, event)}
            />
          </div>

          <div className="input-container">
            <p>End Date</p>
            <input
              type="text"
              name="enddate"
              placeholder="August 2023"
              onChange={(event) => handleExperienceInputChange(index, event)}
            />
          </div>
          <div className="input-container">
            <p>Responsibility or Achievement 1</p>
            <input
              type="text"
              name="responsibility1"
              onChange={(event) => handleExperienceInputChange(index, event)}
              placeholder="Collaborated with the product development team to design, code, and implement new features in the company's main application, enhancing usability and performance. Utilized programming languages such as Python and Java, following Agile methodologies."
            />
          </div>

          <div className="input-container">
            <p>Responsibility or Achievement 2</p>
            <input
              type="text"
              name="responsibility2"
              onChange={(event) => handleExperienceInputChange(index, event)}
              placeholder="Identified and fixed critical bugs in existing software, leading to a 25% reduction in customer-reported issues. Conducted code reviews and refactoring sessions to improve overall code quality and maintainability, contributing to best practices within the development team."
            />
          </div>

          <div className="input-container">
            <p>Responsibility or Achievement 3</p>
            <input
              type="text"
              name="responsibility3"
              onChange={(event) => handleExperienceInputChange(index, event)}
              placeholder="Assisted in the creation and execution of automated test scripts, achieving a 40% reduction in manual testing time. Contributed to continuous integration (CI) and continuous deployment (CD) processes, enhancing the efficiency of development cycles and ensuring the reliability of software releases."
            />
          </div>
        </div>
      ))}
      <button className="add-button" onClick={addExperience}>
        <img className="small-icon" src={AddIcon}></img>
        <p>Add an experience</p>
      </button>
    </div>
  );
}

export function Project() {
  const [userData, setUserData] = useState({
    project: [
      {
        title: "",
        contribution1: "",
        contribution2: "",
      },
    ],
  });
  const handleProjectInputChange = (index, event) => {
    const { name, value } = event.target;
    const newProject = [...userData.project];
    newProject[index][name] = value;
    setUserData({ ...userData, project: newProject });
  };

  const addProject = () => {
    setUserData({
      ...userData,
      project: [
        ...userData.project,
        {
          title: "",
          contribution1: "",
          contribution2: "",
        },
      ],
    });
  };

  const deleteProject = (index) => {
    const newProject = [...userData.project];
    newProject.splice(index, 1);
    setUserData({ ...userData, project: newProject });
  };

  return (
    <div className="resume-section">
      <h1>Projects</h1>
      {userData.project.map((proj, index) => (
        <div className="resume-input-container" key={index}>
          <button
            className="delete-button"
            onClick={() => deleteProject(index)}
          >
            <img className="icon" src={DeleteIcon}></img>
          </button>
          <div className="input-container">
            <p>Title</p>
            <input
              type="text"
              name="title"
              placeholder="SmartHealth Tracker"
              onChange={(event) => handleProjectInputChange(index, event)}
            />
          </div>

          <div className="input-container">
            <p>Contribution 1</p>
            <input
              type="text"
              name="contribution1"
              onChange={(event) => handleProjectInputChange(index, event)}
              placeholder="Developed mobile and web applications using React Native and React.js, and integrated real-time health data from multiple wearable devices using APIs."
            />
          </div>
          <div className="input-container">
            <p>Contribution 2</p>
            <input
              type="text"
              name="contribution2"
              onChange={(event) => handleProjectInputChange(index, event)}
              placeholder="Implemented a personalized recommendation engine using machine learning algorithms that provided customized fitness and nutrition plans, and designed interactive features that led to a 30% increase in daily active users within three months."
            />
          </div>
        </div>
      ))}
      <button className="add-button" onClick={addProject}>
        <img className="small-icon" src={AddIcon}></img>
        <p>Add a project</p>
      </button>
    </div>
  );
}

export function Language() {
  const [userData, setUserData] = useState({
    language: [
      {
        language: "",
      },
    ],
  });
  const handleLanguageInputChange = (index, event) => {
    const { name, value } = event.target;
    const newLanguage = [...userData.language];
    newLanguage[index][name] = value;
    setUserData({ ...userData, language: newLanguage });
  };

  const addLanguage = () => {
    setUserData({
      ...userData,
      language: [
        ...userData.language,
        {
          language: "",
        },
      ],
    });
  };

  const deleteLanguage = (index) => {
    const newLanguage = [...userData.language];
    newLanguage.splice(index, 1);
    setUserData({ ...userData, language: newLanguage });
  };

  return (
    <div className="resume-section">
      <h1>Languages</h1>
      {userData.language.map((lang, index) => (
        <div className="resume-input-container" key={index}>
          <button
            className="delete-button"
            onClick={() => deleteLanguage(index)}
          >
            <img className="icon" src={DeleteIcon}></img>
          </button>
          <div className="input-container">
            <p>Language</p>
            <input
              type="text"
              name="lang"
              placeholder="Python"
              onChange={(event) => handleLanguageInputChange(index, event)}
            />
          </div>
        </div>
      ))}
      <button className="add-button" onClick={addLanguage}>
        <img className="small-icon" src={AddIcon}></img>
        <p>Add a language</p>
      </button>
    </div>
  );
}

export function Tool() {
  const [userData, setUserData] = useState({
    tools: [
      {
        tool: "",
      },
    ],
  });
  const handleToolInputChange = (index, event) => {
    const { name, value } = event.target;
    const newTool = [...userData.tools];
    newTool[index][name] = value;
    setUserData({ ...userData, tools: newTool });
  };

  const addTool = () => {
    setUserData({
      ...userData,
      tools: [
        ...userData.tools,
        {
          tool: "",
        },
      ],
    });
  };

  const deleteTool = (index) => {
    const newTool = [...userData.tools];
    newTool.splice(index, 1);
    setUserData({ ...userData, tools: newTool });
  };

  return (
    <div className="resume-section">
      <h1 className="heading">Tools</h1>
      {userData.tools.map((tool, index) => (
        <div className="resume-input-container" key={index}>
          <button className="delete-button" onClick={() => deleteTool(index)}>
            <img className="icon" src={DeleteIcon}></img>
          </button>
          <div className="input-container">
            <p>Tool</p>
            <input
              type="text"
              name="tool"
              placeholder="Figma"
              onChange={(event) => handleToolInputChange(index, event)}
            />
          </div>
        </div>
      ))}
      <button className="add-button" onClick={addTool}>
        <img className="small-icon" src={AddIcon}></img>
        <p>Add a tool</p>
      </button>
    </div>
  );
}

export function ResumeBuilderBody() {
  return (
    <div className="content">
      <Profile />
      <Education />
      <Experience />
      <Project />
      <Language />
      <Tool />
      <button className="finish-button">Finish</button>
    </div>
  );
}
