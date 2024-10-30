import React from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDF from '../Components/PDF';
import { useSelector } from 'react-redux';

const ResumeGernator = () => {
    const basicInfo = useSelector((state) => state.resume.basicInfo)
    console.log(basicInfo)
    const workExp = useSelector((state) => state.resume.workExp)
    const education = useSelector((state) => state.resume.education)
    console.log(education)
    const skills = useSelector((state) => state.resume.skills)
    console.log(skills)
    const projects = useSelector((state) => state.resume.projects)
    const achievements = useSelector((state) => state.resume.achievements)
    const summary = useSelector((state) => state.resume.summary)
    console.log(summary)
  return (
    <>
      <PDFDownloadLink
      document={<PDF basicInfo={basicInfo} experience={workExp} education={education} skills={skills} project={projects} achievement={achievements} summary={summary}/>}
      fileName="resume.pdf"
      className="btn-download-pdf"
      >
        {({ loading }) => (loading ? (
          <div className="flex">
            <button>Loadding...</button>
            </div>
        ) : (
        <div className="flex">
          <button>Loadding...</button>
          </div>
        ))}
      </PDFDownloadLink>
    </>
  )
}

export default ResumeGernator
