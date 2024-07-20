import Counter from './components/Counter';
import React from 'react';
import Palette from './components/Palette.js';

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }}>
      <Palette />
      <Counter />
    </div>
  );
}

export default App;
