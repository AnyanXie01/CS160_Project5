import { SideMenu } from "../toolbox/sideMenu/SideMenu.js";
import plusIcon from '../toolbox/images/add.png';
import MyDocument from "./generate-pdf.js";
import React, { useState } from 'react';



export function ResumeBuilderBody(props) {

    // State to store user input data
    const [showPDF, setShowPDF] = useState(false);

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        githubaccount: '',
        Degree: '',
        institution: '',
        gpa: '',
        egd: '',
        work: '',
        position: '',
        company: '',
        city: '',
        startdate: '',
        enddate: '',
        responsibility1: '',
        responsibility2: '',
        responsibility3: '',
        projectname: '',
        cont: '',
        contribution2: '',
        language1: '',
        tool1: '',
        // Add other fields as needed...
    });

    // Function to handle input change and update user data state
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
        const { email, email_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: email_value }));
        const { githubaccount, github_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [githubaccount]: github_value }));
        const { degree, degree_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [degree]: degree_value }));
        const { uni, institution_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [uni]: institution_value }));
        const { gpa, GPA_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [gpa]: GPA_value }));
        const { egd, graduationdate_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [egd]: graduationdate_value }));
        const { work, course_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [work]: course_value }));
        const { position, position_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: position_value }));
        const { company, company_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: company_value }));
        const { location, city_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [location]: city_value }));
        const { startdate, startdate_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: startdate_value }));
        const { enddate, enddate_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: enddate_value }));
        const { responsibility1, responsibility1_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: responsibility1_value }));
        const { responsibility2, responsibility2_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: responsibility2_value }));
        const { responsibility3, responsibility3_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: responsibility3_value }));
        const { projectname, title_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [projectname]: title_value }));
        const { cont, contribution1_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [cont]: contribution1_value }));
        const { contribution2, contribution2_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: contribution2_value }));
        const { language1, language1_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: language1_value }));
        const { tool1, tool1_value } = event.target;
        setUserData((prevData) => ({ ...prevData, [email]: tool1_value }));
    };

    // Function to handle the "Finish" button click
    const handleFinishClick = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log('clicked!');
        setShowPDF(true);
    };

    return (
        <form>
            <p> Profile </p>
            <div className="resume-section">
                <label>
                    Name:
                    <input type="text" name="name" placeholder="Chrisdeep" onChange={handleInputChange} />
                </label>
                <br></br>
                <label>
                    Email:
                    <input type="text" name="email" placeholder="your.email@here.com" onChange={handleInputChange} />
                </label>
                <br></br>
                <label>
                    GitHub Account:
                    <input type="text" name="github" placeholder="chrissdeep_" onChange={handleInputChange} />
                </label>
            </div>
            <br></br>

            <input onClick={handleFinishClick} type="submit" value="Finish" id="finish-button" />
        </form>
    )
}