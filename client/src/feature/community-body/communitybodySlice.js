import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentContent: 'ProjectCollab',
}

const bodySlice = createSlice({
  name: 'body',
  initialState,
  reducers: {
    showProjectCollab: (state) => {
      state.currentContent = 'ProjectCollab';
    },
    showCareerExperience: (state) => {
      state.currentContent = 'CareerExperience';
    },
    showMentorship: (state) => {
      state.currentContent = 'Mentorship';
    },
    showPeerInterview: (state) => {
      state.currentContent = 'PeerInterview';
    },
  },
});

export const { showProjectCollab, showCareerExperience, showMentorship,  showPeerInterview} = bodySlice.actions;

export default bodySlice.reducer;