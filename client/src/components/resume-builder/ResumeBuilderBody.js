import React, { useState } from "react";

export function Profile() {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    github: "",
  });

  const handleProfileInputChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="profile-section">
      <p className="heading">Profile</p>

      <label>
        Name:
        <input
          type="text"
          name="name"
          value={profileData.name}
          onChange={handleProfileInputChange}
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={profileData.email}
          onChange={handleProfileInputChange}
        />
      </label>
      <br />

      <label>
        GitHub Account:
        <input
          type="text"
          name="github"
          value={profileData.github}
          onChange={handleProfileInputChange}
        />
      </label>
    </div>
  );
}

export function Education() {
  const [userData, setUserData] = useState({
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
    const newEducation = [...userData.education];
    newEducation[index][name] = value;
    setUserData({ ...userData, education: newEducation });
  };

  const addEducation = () => {
    setUserData({
      ...userData,
      education: [
        ...userData.education,
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
    const newEducation = [...userData.education];
    newEducation.splice(index, 1);
    setUserData({ ...userData, education: newEducation });
  };

  return (
    <>
      <p className="heading">Education</p>
      {userData.education.map((edu, index) => (
        <div className="resume-section" key={index}>
          <label>
            Degree:
            <input
              type="text"
              name="degree"
              onChange={(event) => handleEducationInputChange(index, event)}
              placeholder="Bachelor of Science (B.S.) in Computer Science"
            />
          </label>
          <br></br>
          <label>
            Institution:
            <input
              type="text"
              name="uni"
              onChange={(event) => handleEducationInputChange(index, event)}
              placeholder="React University"
            />
          </label>
          <br></br>
          <label>
            GPA:
            <input
              type="text"
              name="gpa"
              onChange={(event) => handleEducationInputChange(index, event)}
              placeholder="3.8"
            />
          </label>
          <br></br>
          <label>
            Expected Graduation Date:
            <input
              type="text"
              name="egd"
              onChange={(event) => handleEducationInputChange(index, event)}
              placeholder="May 2024"
            />
          </label>
          <br></br>
          <label>
            Related Coursework:
            <input
              type="text"
              name="work"
              onChange={(event) => handleEducationInputChange(index, event)}
              placeholder="CS 61A, CS 61B"
            />
          </label>
          <button onClick={() => deleteEducation(index)}>
            Delete Experience
          </button>
        </div>
      ))}
      <button onClick={addEducation}>Add Education</button>
    </>
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
    <>
      <p className="heading">Experiences</p>
      {userData.experiences.map((exp, index) => (
        <div className="resume-section" key={index}>
          <label>
            Position:
            <input
              type="text"
              name="position"
              placeholder="Software Engineering Intern"
              onChange={(event) => handleExperienceInputChange(index, event)}
            />
          </label>
          <br></br>
          <label>
            Company:
            <input
              type="text"
              name="company"
              placeholder="Google"
              onChange={(event) => handleExperienceInputChange(index, event)}
            />
          </label>
          <br></br>
          <label>
            City, State:
            <input
              type="text"
              name="location"
              placeholder="Sunnyvale, CA"
              onChange={(event) => handleExperienceInputChange(index, event)}
            />
          </label>
          <br></br>
          <label>
            Start Date:
            <input
              type="text"
              name="startdate"
              placeholder="May 2023"
              onChange={(event) => handleExperienceInputChange(index, event)}
            />
          </label>
          <br></br>
          <label>
            End Date:
            <input
              type="text"
              name="enddate"
              placeholder="August 2023"
              onChange={(event) => handleExperienceInputChange(index, event)}
            />
          </label>
          <br></br>
          <label>
            Responsibility or Achievement 1:
            <input
              type="text"
              name="responsibility1"
              onChange={(event) => handleExperienceInputChange(index, event)}
              placeholder="Collaborated with the product development team to design, code, and implement new features in the company's main application, enhancing usability and performance. Utilized programming languages such as Python and Java, following Agile methodologies."
            />
          </label>
          <br></br>
          <label>
            Responsibility or Achievement 2:
            <input
              type="text"
              name="responsibility2"
              onChange={(event) => handleExperienceInputChange(index, event)}
              placeholder="Identified and fixed critical bugs in existing software, leading to a 25% reduction in customer-reported issues. Conducted code reviews and refactoring sessions to improve overall code quality and maintainability, contributing to best practices within the development team."
            />
          </label>
          <br></br>
          <label>
            Responsibility or Achievement 3:
            <input
              type="text"
              name="responsibility3"
              onChange={(event) => handleExperienceInputChange(index, event)}
              placeholder="Assisted in the creation and execution of automated test scripts, achieving a 40% reduction in manual testing time. Contributed to continuous integration (CI) and continuous deployment (CD) processes, enhancing the efficiency of development cycles and ensuring the reliability of software releases."
            />
          </label>
          <button onClick={() => deleteExperience(index)}>
            Delete Experience
          </button>
        </div>
      ))}
      <button onClick={addExperience}>Add Experience</button>
    </>
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
        ...userData.projects,
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
    <>
      <p className="heading">Projects</p>
      {userData.project.map((proj, index) => (
        <div className="resume-section" key={index}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              placeholder="SmartHealth Tracker"
              onChange={(event) => handleProjectInputChange(index, event)}
            />
          </label>
          <br></br>
          <label>
            Contribution 1:
            <input
              type="text"
              name="contribution1"
              onChange={(event) => handleProjectInputChange(index, event)}
              placeholder="Developed mobile and web applications using React Native and React.js, and integrated real-time health data from multiple wearable devices using APIs."
            />
          </label>
          <br></br>
          <label>
            Contribution 2:
            <input
              type="text"
              name="contribution2"
              onChange={(event) => handleProjectInputChange(index, event)}
              placeholder="Implemented a personalized recommendation engine using machine learning algorithms that provided customized fitness and nutrition plans, and designed interactive features that led to a 30% increase in daily active users within three months."
            />
          </label>
          <button onClick={() => deleteProject(index)}>Delete Project</button>
        </div>
      ))}
      <button onClick={addProject}>Add Project</button>
    </>
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
        ...userData.Language,
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
    <>
      <p className="heading">Languages</p>
      {userData.language.map((lang, index) => (
        <div className="resume-section" key={index}>
          <label>
            Language:
            <input
              type="text"
              name="lang"
              placeholder="Python"
              onChange={(event) => handleLanguageInputChange(index, event)}
            />
          </label>
          <button onClick={() => deleteLanguage(index)}>Delete Language</button>
        </div>
      ))}
      <button onClick={addLanguage}>Add Language</button>
    </>
  );
}

export function Tool() {
  const [userData, setUserData] = useState({
    tools: [
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
        ...userData.Tool,
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

  const deleteTool = (index) => {
    const newTool = [...userData.tools];
    newTool.splice(index, 1);
    setUserData({ ...userData, tools: newTool });
  };

  return (
    <>
      <p className="heading">Tools</p>
      {userData.tools.map((tool, index) => (
        <div className="resume-section" key={index}>
          <label>
            Tool:
            <input
              type="text"
              name="lang"
              placeholder="Figma"
              onChange={(event) => handleToolInputChange(index, event)}
            />
          </label>
          <button onClick={() => deleteTool(index)}>Delete Tool</button>
        </div>
      ))}
      <button onClick={addTool}>Add Tool</button>
    </>
  );
}

export function ResumeBuilderBody() {
  return (
    <>
      <Profile />
      <Education />
      <Experience />
      <Project />
      <Language />
      <Tool />
    </>
  );
}
