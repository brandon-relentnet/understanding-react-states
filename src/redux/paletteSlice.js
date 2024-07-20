import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    palette: 'latte'
  };

export const paletteSlice = createSlice({
    name: 'palette',
    initialState,
    reducers: {
        setPalette: (state, action) => {
            state.palette = action.payload;
          }
    },
});

export const { setPalette } = paletteSlice.actions;
export default paletteSlice.reducer;
