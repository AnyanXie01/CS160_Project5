import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import UserData from "./ResumeBuilderBody";
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

// Create Document Component
const MyDocument = ({
  profile,
  education,
  experience,
  project,
  language,
  tool,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text class="title">{profile.name}</Text>
        <Text>
          {profile.email} | {profile.github}
        </Text>

        <Text>EDUCATION</Text>
        {education &&
          education.map((edu, index) => (
            <React.Fragment key={index}>
              <Text>Degree:{edu.degree}</Text>
              <br></br>
              <Text>Institution: {edu.institution}</Text>
              <br></br>
              <Text>GPA: {edu.gpa}</Text>
              <br></br>
              <Text>Graduation Date: {edu.gradDate}</Text>
              <br></br>
              <Text>Course: {edu.coursework}</Text>
              <br></br>
            </React.Fragment>
          ))}

        <Text>EXPERIENCES</Text>
        {experience &&
          experience.map((exp, index) => (
            <React.Fragment key={index}>
              <Text>position: {exp.position}</Text>
              <br></br>
              <Text>company: {exp.company}</Text>
              <br></br>
              <Text>city: {exp.location}</Text>
              <br></br>
              <Text>startdate: {exp.startdate}</Text>
              <br></br>
              <Text>enddate: {exp.enddate}</Text>
              <br></br>
              <Text>responsibility1: {exp.responsibility1}</Text>
              <br></br>
              <Text>responsibility2: {exp.responsibility2}</Text>
              <br></br>
              <Text>responsibility3: {exp.responsibility3}</Text>
            </React.Fragment>
          ))}

        <Text>PROJECTS</Text>
        {project &&
          project.map((proj, index) => (
            <React.Fragment key={index}>
              <Text>projectname: {proj.projectname}</Text>
              <br></br>
              <Text>contribution1: {proj.cont}</Text>
              <br></br>
              <Text>contribution2: {proj.cont}</Text>
              <br></br>
            </React.Fragment>
          ))}
        <br></br>

        <Text>LANGUAGES: </Text>
        {language &&
          language.map((lang, index) => (
            <React.Fragment key={index}>
              <Text>{lang.lang}</Text>
              <br></br>
            </React.Fragment>
          ))}
        <Text>TOOLS: </Text>
        {tool &&
          tool.map((tl, index) => (
            <React.Fragment key={index}>
              <Text>{tl.tool}</Text>
              <br></br>
            </React.Fragment>
          ))}
      </View>
    </Page>
  </Document>
);
export default MyDocument;
