import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import PoppinsMedium from "../font/PoppinsMedium.ttf";

const PDF = ({
  basicInfo,
  summary,
  skills,
  experience,
  project,
  education,
  achievement,
}) => {
  Font.register({ family: "Pop", src: PoppinsMedium });

  const styles = StyleSheet.create({
    page: { padding: 20 },
    section: { margin: 3, padding: 4 },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 4,
      fontFamily: "Pop",
    },
    text: {
      fontSize: 12,
      fontFamily: "Pop",
      color: "#1f1f1f",
      marginBottom: 5,
    },
    flex: {
      display: "flex",
      flexDirection: "row",
      fontSize: 14,
      fontFamily: "Pop",
      fontWeight: "bold",
      marginBottom: 5,
    },
  });

  return (
    <>
      <Document>
        <Page style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.title}>{basicInfo.name}</Text>
            <Text style={styles.flex}>
              Email: <Text style={styles.text}> {basicInfo.email}</Text>
            </Text>
            <Text style={styles.flex}>
              Phone:
              <Text style={styles.text}> {basicInfo.phone}</Text>
            </Text>
            <Text style={styles.flex}>
              LinkedIn:
              <Text style={styles.text}> {basicInfo.linkedIn}</Text>
            </Text>
            <Text style={styles.flex}>
              GitHub:
              <Text style={styles.text}> {basicInfo.github}</Text>
            </Text>
            {basicInfo.link?.map((link, index) => (
              <Text key={index} style={styles.flex}>
                social Link:
                <Text style={styles.text}> {link.number}</Text>
              </Text>
            ))}
          </View>
          <View style={styles.section}>
            <Text style={styles.flex}>
              {summary.sumtitle}
              <Text style={styles.text}> {summary.summary}</Text>
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Skills</Text>
            <Text style={styles.flex}>
              Languages:
              <Text style={styles.text}> {skills.languages}</Text>
            </Text>
            <Text style={styles.flex}>
              Frameworks:
              <Text style={styles.text}> {skills.frameworks}</Text>
            </Text>
            <Text style={styles.flex}>
              DevTools:
              <Text style={styles.text}> {skills.devTools}</Text>
            </Text>
            <Text style={styles.flex}>
              Databases:
              <Text style={styles.text}> {skills.database}</Text>
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Experience</Text>
            {experience.map((exp, index) => (
              <View key={index} style={{ marginBottom: 8 }}>
                <Text style={styles.flex}>                  
                  Role: {exp.roleName}
                  <Text style={styles.text}> {exp.duration}</Text>
                </Text>
                <Text style={styles.flex}>
                  Company:
                  <Text style={styles.text}> {exp.companyName}</Text>
                </Text>
                <Text style={styles.flex}>
                  Location:
                  <Text style={styles.text}> {exp.location}</Text>
                </Text>
                <Text style={styles.flex}>
                  Responsibilities:
                  <Text style={styles.text}> {exp.responsibilities}</Text>
                </Text>
              </View>
            ))}
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Projects</Text>
            {project?.map((pro, index) => (
              <View key={index} style={{ marginBottom: 8 }}>
                <Text style={styles.flex}>
                  Project Name:{" "}
                  <Text style={styles.text}>
                    {" "}
                    {pro.projects[index].projectName}
                  </Text>
                </Text>
                <Text style={styles.flex}>
                  Tech Stack:
                  <Text style={styles.text}> {pro.tech}</Text>
                </Text>
                <Text style={styles.flex}>
                  Deployed Link:
                  <Text style={styles.text}> {pro.deployedLink}</Text>
                </Text>
                <Text style={styles.flex}>
                  GitHub Link:
                  <Text style={styles.text}> {pro.githubLink}</Text>
                </Text>
                <Text style={styles.flex}>
                  Description:
                  <Text style={styles.text}> {pro.description}</Text>
                </Text>
              </View>
            ))}
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Education</Text>
            {education?.map((edu, index) => (
              <View key={index} style={{ marginBottom: 8 }}>
                <View>
                  <Text style={styles.flex}>
                    Degree:
                    <Text style={styles.text}>{edu.degree}</Text>
                    <Text style={styles.text}> {edu.durationTime}</Text>
                  </Text>
                  <Text style={styles.flex}>
                    University:
                    <Text style={styles.text}> {edu.collegeName}</Text>
                  </Text>
                  <Text style={styles.flex}>
                    Location:
                    <Text style={styles.text}> {edu.location}</Text>
                  </Text>
                </View>
              </View>
            ))}
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Achievements</Text>
            <Text style={styles.text}>{achievement.achievements1}</Text>
            <Text style={styles.text}>{achievement.achievements2}</Text>
            <Text style={styles.text}>{achievement.achievements3}</Text>
            <Text style={styles.text}>{achievement.achievements4}</Text>
          </View>
        </Page>
      </Document>
    </>
  );
};

export default PDF;
