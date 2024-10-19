import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basicInfo: {},
  workExp: {},
  education: {},
  skills: {},
  projects: {},
  achievements: {},
  summary: {},
};

const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    setBasicInfo :(state , action) =>{
        state.basicInfo = action.payload
    },
    setWorkExp: (state, action) => {
      state.workExp = action.payload;
    },
    setEducation: (state, action) => {
      state.education = action.payload;
    },
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    setAchievements: (state, action) => {
      state.achievements = action.payload;
    },
    setSummary: (state, action) => {
      state.summary = action.payload;
    },
  },
});

export const { setBasicInfo, setWorkExp, setEducation, setSkills, setProjects, setAchievements, setSummary } = UserSlice.actions;

export default UserSlice.reducer;
