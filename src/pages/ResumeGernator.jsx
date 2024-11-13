import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDF from "../Components/PDF";
import { useSelector } from "react-redux";
import "../App.css";

const ResumeGernator = () => {
  const basicInfo = useSelector((state) => state.resume.basicInfo);
  const workExp = useSelector((state) =>
    state.resume.workExp && state.resume.workExp.length > 0
      ? state.resume.workExp[0].experiences
      : state.resume.workExp
  );
  console.log(workExp);
  const education = useSelector((state) =>
    state.resume.education && state.resume.education.length > 0
      ? state.resume.education[0].education
      : state.resume.education
  );
  const skills = useSelector((state) => state.resume.skills);
  const projects = useSelector((state) =>
    state.resume.projects && state.resume.projects.length > 0
      ? state.resume.projects[0].projects
      : state.resume.projects
  );
  console.log(projects);
  const achievements = useSelector((state) => state.resume.achievements);
  const summary = useSelector((state) => state.resume.summary);
  return (
    <>
      <div className="min-h-screen bg-[#121212]">
        <PDFDownloadLink
          document={
            <PDF
              basicInfo={basicInfo}
              experience={workExp}
              education={education}
              skills={skills}
              project={projects}
              achievement={achievements}
              summary={summary}
            />
          }
          fileName="resume.pdf"
          className="btn-download-pdf"
        >
          {({ loading }) =>
            loading ? (
              <div className="min-h-screen">
                <div className="flex justify-center mt-28">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    color="#ffffff"
                    fill="none"
                  >
                    <path
                      d="M12 3V6"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M12 18V21"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M21 12L18 12"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M6 12L3 12"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M18.3635 5.63672L16.2422 7.75804"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M7.75804 16.2422L5.63672 18.3635"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M18.3635 18.3635L16.2422 16.2422"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M7.75804 7.75804L5.63672 5.63672"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
            ) : (
              <div className="flex justify-center mt-24 tex-white">
                <button className="py-2 px-8 rounded-3xl border-2 border-[#858585]">
                  download
                </button>
              </div>
            )
          }
        </PDFDownloadLink>
      </div>
    </>
  );
};

export default ResumeGernator;
