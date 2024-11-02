import React from 'react'
import {Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer'

const PDF = ({basicInfo,summary,skills,experience,project,education,achievement}) => {
  const styles = StyleSheet.create({
    page: { padding: 20 },
    section: { margin: 3, padding: 4 },
    title: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
    text: { fontSize: 12, marginBottom: 5 },
    center:{display:'flex',textAlign:'center'},
    flex:{display:'flex',fontSize:12,marginBottom:5},
  });
  
  return (
    <>
      <Document>
        <Page style={styles.page}>
          <View style={styles.section}>
           <Text style={styles.center}>{basicInfo.name}</Text>
           <Text style={styles.text}>Email: {basicInfo.email}</Text>
           <Text style={styles.text}>Phone: {basicInfo.phone}</Text>
           <Text style={styles.text}>LinkedIn:{basicInfo.linkedIn}</Text>
           <Text style={styles.text}>GitHub: {basicInfo.github}</Text>
           {basicInfo.more?.map((link, index) => (
            <Text key={index} style={styles.text}>
              social Link: {link.number}
            </Text>
           ))}
          </View>
          <View style={styles.section}>
            {/* <Text style={styles.title}>Summary</Text> */}
            <Text style={styles.title}>{summary.sumtitle}</Text>
            <Text style={styles.text}>{summary.summary}</Text>
            </View>
          <View style={styles.section}>
            <Text style={styles.title}>Skills</Text>
            <Text style={styles.text}>Languages: {skills.languages}</Text>
            <Text style={styles.text}>Frameworks: {skills.frameworks}</Text>
            <Text style={styles.text}>DevTools: {skills.devTools}</Text>
            <Text style={styles.text}>Databases: {skills.database}</Text>
          </View>
          <View style={styles.section}>
        <Text style={styles.title}>Experience</Text>
        {experience?.map((exp, index) => (
          <View key={index} style={{ marginBottom: 8 }}>
            <Text style={styles.flex}>Role: {exp.experiences[index].roleName} </Text>
            <Text style={styles.flex}>{exp.duration}</Text>
            <Text style={styles.text}>Company: {exp.companyName}</Text>
            <Text style={styles.text}>Location: {exp.location}</Text>
            <Text style={styles.text}>Location: {exp.responsibilities}</Text>
          </View>
        ))}
      </View>
          <View style={styles.section}>
        <Text style={styles.title}>Projects</Text>
        {project?.map((pro, index) => (
          <View key={index} style={{ marginBottom: 8 }}>
            <Text style={styles.text}>Project Name:{pro.projects[index].projectName}</Text>
            <Text style={styles.text}>Tech Stack:{pro.tech}</Text>
            <Text style={styles.text}>Deployed Link:{pro.deployedLink}</Text>
            <Text style={styles.text}>GitHub Link:{pro.githubLink}</Text>
            <Text style={styles.text}>Description: {pro.description}</Text>
          </View>
        ))}
      </View>
          <View style={styles.section}>
        <Text style={styles.title}>Education</Text>
        {education?.map((edu, index) => (
          <View key={index} style={{ marginBottom: 8 }}>
            <View style={{display:'flex',flexDirection:'row'}}>
            <Text style={styles.text}>{edu.degree}</Text>
            <Text style={styles.text}>{edu.durationTime}</Text>
            </View>
            <Text style={styles.text}>{edu.collegeName}</Text>
            <Text style={styles.text}>{edu.location}</Text>
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
  )
}

export default PDF
