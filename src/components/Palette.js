import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPalette } from '../redux/paletteSlice';
import { palettes } from '../palettes.js';

function Palette() {
  const paletteName = useSelector((state) => state.palette.palette);
  const dispatch = useDispatch();
  const palette = palettes[paletteName];

  useEffect(() => {
    if (palette) {
      document.documentElement.style.setProperty('--background', palette.background);
      document.documentElement.style.setProperty('--text', palette.text);
      document.documentElement.style.setProperty('--button-background', palette.buttonBackground);
      document.documentElement.style.setProperty('--button-hover', palette.buttonHover);
    }
  }, [palette]);

  return (
    <div className="palette">
      <div className="button-container">
        <button className="palette-button" onClick={() => dispatch(setPalette('latte'))}>Latte</button>
        <button className="palette-button" onClick={() => dispatch(setPalette('frappe'))}>Frappé</button>
        <button className="palette-button" onClick={() => dispatch(setPalette('macchiato'))}>Macchiato</button>
        <button className="palette-button" onClick={() => dispatch(setPalette('mocha'))}>Mocha</button>
      </div>
    </div>
  );
}

export default Palette;