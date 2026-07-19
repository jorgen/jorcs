import React from 'react';

type ColorPaletteProps = {
  onSelectColor: (color: string) => void;
  onClose: () => void;
};

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'white'];

const ColorPicker: React.FC<ColorPaletteProps> = ({ onSelectColor, onClose }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%', // Adjust position as needed
        left: '50%',
        width: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '10px',
        borderRadius: '5px',
        zIndex: 100,
      }}
    >
      <p>Select a color:</p>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {colors.map((color) => (
          <div
            key={color}
            onClick={() => {
              onSelectColor(color);
              onClose();
            }}
            style={{
              backgroundColor: color,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              cursor: 'pointer',
              border: '1px solid #000',
            }}
          />
        ))}
      </div>
      <button onClick={onClose} style={{ marginTop: '10px' }}>
        Cancel
      </button>
    </div>
  );
};

export default ColorPicker;
