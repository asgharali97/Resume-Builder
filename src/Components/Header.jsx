import React from "react";
import { useNavigate } from "react-router-dom";
import parse from 'html-react-parser'

const Header = () => {
  const navigate = useNavigate();

  const navItem = [
    {
      name: "Basic Info",
      slug: "/basicInfo",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-store "><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path><path d="M2 7h20"></path><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"></path></svg>',
    },
    {
      name: "Summary",
      slug: "/summary",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffff" fill="none"><path d="M19 11.0032V10C19 6.22876 19 4.34315 17.8284 3.17157C16.6569 2 14.7712 2 11 2H10.0082L3 8.98648V14.0062C3 17.7714 3 19.654 4.16811 20.825L4.17504 20.8319C5.34602 22 7.2286 22 10.9938 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M3 9.00195H4C6.82843 9.00195 8.24264 9.00195 9.12132 8.12327C10 7.24459 10 5.83038 10 3.00195V2.00195" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M16.4069 21.5983C16.6192 22.1365 17.3808 22.1365 17.5931 21.5983L17.6298 21.5051C18.1482 20.1906 19.1887 19.1502 20.5031 18.6318L20.5964 18.595C21.1345 18.3828 21.1345 17.6211 20.5964 17.4089L20.5031 17.3721C19.1887 16.8537 18.1482 15.8133 17.6298 14.4989L17.5931 14.4056C17.3808 13.8674 16.6192 13.8674 16.4069 14.4056L16.3702 14.4989C15.8518 15.8133 14.8113 16.8537 13.4969 17.3721L13.4036 17.4089C12.8655 17.6211 12.8655 18.3828 13.4036 18.595L13.4969 18.6318C14.8113 19.1502 15.8518 20.1906 16.3702 21.5051L16.4069 21.5983Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>',
    },
    {
      name: "Skills",
      slug: "/skills",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain-circuit "><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>',
    },
    {
      name: "Experience",
      slug: "/experience",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase-business "><path d="M12 12h.01"></path><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path><path d="M22 13a18.15 18.15 0 0 1-20 0"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>',
    },
    {
      name: "Projects",
      slug: "/projects",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-presentation "><path d="M2 3h20"></path><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path><path d="m7 21 5-5 5 5"></path></svg>',
    },
    {
      name: "Education",
      slug: "/education",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap "><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>',
    },
    {
      name: "Achievement",
      slug: "/achivements",
      svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-medal "><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path><path d="M11 12 5.12 2.2"></path><path d="m13 12 5.88-9.8"></path><path d="M8 7h8"></path><circle cx="12" cy="17" r="5"></circle><path d="M12 18v-2h-.5"></path></svg>',
    },
  ];
  return (
    <>
      <div className="flex items-center justify-between bg-[#1f1f1f] text-yellow-50 px-8 py-4 ">
        <div className="logo text-3xl font-bold">Resume</div>
        <div className="nav flex items-center w-3/4 cursor-pointer">
          {navItem.map((item) => (
            <div key={item.name} className="flex items-center">
                {parse(item.svg)}
              <button
                onClick={() => navigate(item.slug)}
                className="font-display font-medium text-[#c5dbd3] w-[8vw] py-2 flex justify-center rounded-full transition ease-in"
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
