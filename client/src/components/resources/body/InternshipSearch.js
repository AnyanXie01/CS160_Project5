import "./InternshipSearch.css";
import data from "./internshipscollection.json";

import Tool from "../Tool";

import LinkIcon from "../images/icons/link arrow.png";
import InternshipSearchIcon from "../images/icons/internshipsearch.png";

import LinkedInLogo from "../images/logos/linkedin.png";
import GlassdoorLogo from "../images/logos/glassdoor.png";
import IndeedLogo from "../images/logos/indeed.png";
import HandshakeLogo from "../images/logos/handshake.png";
import OttaLogo from "../images/logos/otta.png";
import ZiprecruiterLogo from "../images/logos/ziprecruiter.png";

function OpenPosition() {
  return (
    <div className="resources-container">
      {data.map((companyData, index) => (
        <div className="position-card" key={index}>
          <div className="company-container">
            <p>{companyData.company}</p>
          </div>
          <div className="location-container">
            {companyData.locations.map((loc, index) => (
              <p key={index}>{loc}</p>
            ))}
          </div>
          <div className="link-container">
            {companyData.roles.map((role, index) => (
              <button
                className="link-button"
                key={index}
                onClick={() => window.open(role.link)}
              >
                <p>{role.role}</p>
                <img
                  className="small-icon"
                  src={LinkIcon}
                  alt="Link Icon"
                ></img>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const tools = [
  { name: "LinkedIn", logo: LinkedInLogo, link: "https://linkedin.com/" },
  {
    name: "Glassdoor",
    logo: GlassdoorLogo,
    link: "https://www.glassdoor.com/",
  },
  { name: "Indeed", logo: IndeedLogo, link: "https://www.indeed.com/" },
  {
    name: "Handshake",
    logo: HandshakeLogo,
    link: "https://joinhandshake.com/",
  },
  { name: "Otta", logo: OttaLogo, link: "https://otta.com/" },
  {
    name: "Ziprecruiter",
    logo: ZiprecruiterLogo,
    link: "https://www.ziprecruiter.com/",
  },
];

export function InternshipSearch() {
  return (
    <div className="content">
      <div className="title">
        <img
          className="title-icon"
          src={InternshipSearchIcon}
          alt="Data Structures and Algorithms"
        ></img>
        <h1>Internship Search</h1>
      </div>
      <div className="section">
        <div className="section-header">
          <h2>Tools</h2>
        </div>
        <div className="tool-container">
          {tools.map((tool) => (
            <Tool
              name={tool.name}
              logo={tool.logo}
              link={tool.link}
              key={tool.name}
            />
          ))}
        </div>
      </div>
      <div className="section">
        <div className="section-header">
          <h2>Summer 2024 Open Positions</h2>
        </div>
        <OpenPosition />
      </div>
    </div>
  );
}
