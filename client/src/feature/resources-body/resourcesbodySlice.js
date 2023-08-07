import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentContent: 'dataAlgo',
}

const bodySlice = createSlice({
  name: 'body',
  initialState,
  reducers: {
    showDataAlgo: (state) => {
      state.currentContent = 'dataAlgo';
    },
    showInternSearch: (state) => {
      state.currentContent = 'internSearch';
    },
    showSampleResume: (state) => {
      state.currentContent = 'sampleResume';
    },
  },
});

export const { showDataAlgo, showInternSearch, showSampleResume } = bodySlice.actions;

export default bodySlice.reducer;
