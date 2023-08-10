import React, { useState, useRef, useEffect } from "react";
import "./DataAlgo.css";
import ResourcesCollection from "./dataalgocollection.json";

import Tool from "../Tool";

import DataAlgoIcon from "../images/icons/dataalgo.png";
import LinkIcon from "../images/icons/link arrow.png";
import CollapseIcon from "../images/icons/collapse.png";

import LeetCodeLogo from "../images/logos/leetcode.png";
import HackerRankLogo from "../images/logos/hackerrank.png";
import TopCoderLogo from "../images/logos/topcoder.png";
import GeeksforGeeksLogo from "../images/logos/geeksforgeeks.png";
import CodilityLogo from "../images/logos/codility.png";
import AlgoExpertLogo from "../images/logos/algoexpert.png";
import { BodyHeader } from "../../toolbox/header/BodyHeader";

function Collapsible({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0";
    }
  }, [isOpen]);

  return (
    <div className={`collapsible ${isOpen ? "collapsible-open" : ""}`}>
      <button
        className="collapsible-button"
        aria-label="collapsible button"
        onClick={() => {
          setIsOpen(!isOpen);
          setIsRotated(!isRotated);
        }}
      >
        <p>{title}</p>
        <img
          className={`small-icon rotate ${isRotated ? "rotate-180" : ""}`}
          alt="collapsible button"
          src={CollapseIcon}
        />
      </button>
      <div
        ref={contentRef}
        className={`collapsible-container ${
          isOpen ? "collapsible-container-open" : ""
        }`}
      >
        <Resources resources={content} />
      </div>
    </div>
  );
}

function Resources({ resources }) {
  return (
    <div className="resource-container">
      {resources.map((res, index) => (
        <button
          className="link-button"
          aria-label="link button"
          key={index}
          onClick={() => window.open(res.link)}
        >
          <p>
            {"[" + res.type + "]"} {res.owner} - {res.name}
          </p>
          <img className="small-icon" alt = "small icon"src={LinkIcon}></img>
        </button>
      ))}
    </div>
  );
}

const tools = [
  { name: "LeetCode", logo: LeetCodeLogo, link: "https://leetcode.com/" },
  {
    name: "HackerRank",
    logo: HackerRankLogo,
    link: "https://www.hackerrank.com/",
  },
  { name: "TopCoder", logo: TopCoderLogo, link: "https://www.topcoder.com/" },
  {
    name: "GeeksforGeeks",
    logo: GeeksforGeeksLogo,
    link: "https://www.geeksforgeeks.org/",
  },
  { name: "Codility", logo: CodilityLogo, link: "https://www.codility.com/" },
  {
    name: "AlgoExpert",
    logo: AlgoExpertLogo,
    link: "https://www.algoexpert.io/product",
  },
];

export function DataAlgo() {
  let titleArr = [DataAlgoIcon, "Data Structures and Algorithms", ""];
  return (
    <div className="content">
      <BodyHeader titleArr={titleArr} />
      <div className="section">
        <div className="section-header">
          <h2>Practice Tools</h2>
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
          <h2>Resources</h2>
        </div>
        <div className="resources-container">
          {ResourcesCollection.map((topic, index) => (
            <Collapsible
              title={topic.title}
              content={topic.content}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default DataAlgo;
