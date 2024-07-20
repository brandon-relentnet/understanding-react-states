import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import paletteReducer from './paletteSlice';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    palette: paletteReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({
    counter: store.getState().counter,
    palette: store.getState().palette,
  });
});
