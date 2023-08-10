import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 36,
  },
  section: {
    marginBottom: 10,
    flexGrow: 0,
  },
  entry: {
    marginBottom: 5,
  },
  heading: {
    marginBottom: 2,
  },
  title: {
    fontSize: 20,
    fontFamily: "Times-Bold",
  },
  bold: {
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "Times-Bold",
  },
  normal: {
    fontSize: 12,
    fontFamily: "Times-Roman",
  },
  italic: {
    fontSize: 12,
    fontFamily: "Times-Italic",
  },
  line: {
    fontSize: 5,
  },
});

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
      <View>
        {profile && profile.name && (
          <View style={styles.section}>
            <Text class="title" style={[styles.title, { textAlign: "center" }]}>
              {profile.name}
            </Text>
            {profile && (profile.email || profile.github) && (
              <Text style={[styles.normal, { textAlign: "center" }]}>
                {[profile.email, profile.github].filter(Boolean).join(" | ")}
              </Text>
            )}
          </View>
        )}

        {education && education.length > 0 && (
          <View>
            <View style={styles.heading}>
              <Text style={[styles.bold, { textAlign: "center" }]}>
                EDUCATION
              </Text>
              <Text style={styles.line}>
                _______________________________________________________________________________________________________________________________________________________________________________________________
              </Text>
            </View>
            <View style={styles.section}>
              {education.map(
                (edu, index) =>
                  (edu.institution ||
                    edu.degree ||
                    edu.gradDate ||
                    edu.gpa ||
                    edu.coursework) && (
                    <View key={index} style={styles.entry}>
                      {edu.institution && (
                        <Text style={styles.bold}>{edu.institution}</Text>
                      )}
                      {edu.degree && (
                        <Text style={styles.italic}>{edu.degree}</Text>
                      )}
                      {edu.gradDate && (
                        <Text style={styles.normal}>
                          Graduation Date: {edu.gradDate}
                        </Text>
                      )}
                      {edu.gpa && (
                        <Text style={styles.normal}>
                          Cummulative GPA: {edu.gpa}
                        </Text>
                      )}
                      {edu.coursework && (
                        <Text style={styles.normal}>
                          • Relevant coursework: {edu.coursework}
                        </Text>
                      )}
                    </View>
                  )
              )}
            </View>
          </View>
        )}

        {(language && language.length > 0) || (tool && tool.length > 0) ? (
          <View>
            <View style={styles.heading}>
              <Text style={[styles.bold, { textAlign: "center" }]}>SKILLS</Text>
              <Text style={styles.line}>
                _______________________________________________________________________________________________________________________________________________________________________________________________
              </Text>
            </View>
            <View style={styles.section}>
              {language && language.length > 0 && (
                <Text style={styles.normal}>
                  <Text style={styles.bold}>• Languages:</Text>{" "}
                  {language.map((lang) => lang.language).join(", ")}
                </Text>
              )}
              {tool && tool.length > 0 && (
                <Text style={styles.normal}>
                  <Text style={styles.bold}>• Tools:</Text>{" "}
                  {tool.map((tl) => tl.tool).join(", ")}
                </Text>
              )}
            </View>
          </View>
        ) : null}

        {experience && experience.length > 0 && (
          <View>
            <View style={styles.heading}>
              <Text style={[styles.bold, { textAlign: "center" }]}>
                EXPERIENCES
              </Text>
              <Text style={styles.line}>
                _______________________________________________________________________________________________________________________________________________________________________________________________
              </Text>
            </View>
            <View style={styles.section}>
              {experience.map(
                (exp, index) =>
                  (exp.position ||
                    exp.company ||
                    exp.location ||
                    exp.startdate ||
                    exp.enddate ||
                    exp.responsibility1 ||
                    exp.responsibility2 ||
                    exp.responsibility3) && (
                    <View key={index} style={styles.entry}>
                      {exp.position && (
                        <Text style={styles.bold}>{exp.position}</Text>
                      )}
                      {(exp.company ||
                        exp.location ||
                        (exp.startdate && exp.enddate)) && (
                        <Text style={styles.italic}>
                          {[
                            exp.company,
                            exp.location,
                            exp.startdate && exp.enddate
                              ? `${exp.startdate}-${exp.enddate}`
                              : null,
                          ]
                            .filter(Boolean)
                            .join(" | ")}
                        </Text>
                      )}
                      {exp.responsibility1 && (
                        <Text style={styles.normal}>
                          • {exp.responsibility1}
                        </Text>
                      )}
                      {exp.responsibility2 && (
                        <Text style={styles.normal}>
                          • {exp.responsibility2}
                        </Text>
                      )}
                      {exp.responsibility3 && (
                        <Text style={styles.normal}>
                          • {exp.responsibility3}
                        </Text>
                      )}
                    </View>
                  )
              )}
            </View>
          </View>
        )}

        {project && project.length > 0 && (
          <View>
            <View style={styles.heading}>
              <Text style={[styles.bold, { textAlign: "center" }]}>
                PROJECTS
              </Text>
              <Text style={styles.line}>
                _______________________________________________________________________________________________________________________________________________________________________________________________
              </Text>
            </View>

            <View style={styles.section}>
              {project.map(
                (proj, index) =>
                  (proj.title || proj.contribution1 || proj.contribution2) && (
                    <View key={index} style={styles.entry}>
                      {proj.title && (
                        <Text style={styles.bold}>{proj.title}</Text>
                      )}
                      {proj.contribution1 && (
                        <Text style={styles.normal}>
                          • {proj.contribution1}
                        </Text>
                      )}
                      {proj.contribution2 && (
                        <Text style={styles.normal}>
                          • {proj.contribution2}
                        </Text>
                      )}
                    </View>
                  )
              )}
            </View>
          </View>
        )}
      </View>
    </Page>
  </Document>
);

export default MyDocument;
