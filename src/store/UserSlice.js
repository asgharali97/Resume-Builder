import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basicInfo: {},
  workExp: [],
  education: [],
  skills: [],
  summary: [],
  projects: [],
  achievements: [],
};

const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    setBasicInfo: (state, action) => {
      state.basicInfo = action.payload;
    },
    setWorkExp: (state, action) => {
      state.workExp.push(action.payload);
    },
    removeWorkExp: (state, action) => {
      state.workExp = state.workExp.filter(
        (_, index) => index !== action.payload
      );
    },
    setEducation: (state, action) => {
      state.education.push(action.payload);
    },
    removeEducation: (state, action) => {
      state.education = state.education.filter(
        (_, index) => index !== action.payload
      );
    },
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
    removeSkills: (state, action) => {
      state.skills = state.skills.filter(
        (_, index) => index !== action.payload
      );
    },
    setProjects: (state, action) => {
      state.projects.push(action.payload);
    },
    removeProjects: (state, action) => {
      state.projects = state.projects.filter(
        (_, index) => index !== action.payload
      );
    },
    setAchievements: (state, action) => {
      state.achievements = action.payload;
    },
   
    removeAchievements: (state, action) => {
      state.achievements = state.achievements.filter(
        (_, index) => index !== action.payload
      );
    },
    setSummary: (state,action) =>{
      state.summary= action.payload
    },
    removeSummary: (state, action) => {
      state.summary = state.summary.filter(
        (_, index) => index !== action.payload
      );
    },
  },
});

export const {
  setBasicInfo,
  setWorkExp,
  removeWorkExp,
  setEducation,
  removeEducation,
  setSkills,
  removeSkill,
  setProjects,
  removeProjects,
  setAchievements,
  removeAchievements,
  setSummary,
  removeSummary,
} = UserSlice.actions;

export default UserSlice.reducer;
