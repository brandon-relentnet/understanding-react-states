// src/PaletteDropdown.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPalette } from '../redux/paletteSlice';
import { palettes } from '../palettes';

function PaletteDropdown() {
  const paletteName = useSelector((state) => state.palette.palette);
  const dispatch = useDispatch();
  const palette = palettes[paletteName];

  useEffect(() => {
    if (palette) {
      const style = document.getElementById('dynamic-palette');
      if (style) {
        style.remove();
      }

      const newStyle = document.createElement('style');
      newStyle.id = 'dynamic-palette';
      document.head.appendChild(newStyle);

      const cssVariables = `
        :root {
          --background-base: ${palette.background};
          --text-base: ${palette.text};
          --button-background-base: ${palette.buttonBackground};
          --button-hover-base: ${palette.buttonHover};
          --button-border-hover-base: ${palette.buttonBorderHover};
          --link-base: ${palette.link};
          --link-hover-base: ${palette.linkHover};
          --card-background-base: ${palette.cardBackground};
          --card-border-base: ${palette.cardBorder};
          --modal-background-base: ${palette.modalBackground};
          --header-background-base: ${palette.headerBackground};
          --footer-background-base: ${palette.footerBackground};
          --error-base: ${palette.error};
          --warning-base: ${palette.warning};
          --success-base: ${palette.success};
          --info-base: ${palette.info};
        }
      `;

      newStyle.innerHTML = cssVariables;
    }
  }, [palette]);

  const handlePaletteChange = (event) => {
    dispatch(setPalette(event.target.value));
  };

  return (
    <div className="palette-dropdown">
      <select value={paletteName} onChange={handlePaletteChange}>
        {Object.keys(palettes).map((key) => (
          <option key={key} value={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PaletteDropdown;
