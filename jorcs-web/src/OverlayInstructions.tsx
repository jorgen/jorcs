import React from 'react';

type OverlayInstructionsProps = {
  currentSide: number;
};

const sideInstructions = [
  'Front Side',
  'Right Side',
  'Back Side',
  'Left Side',
  'Top Side',
  'Bottom Side',
];

const OverlayInstructions: React.FC<OverlayInstructionsProps> = ({ currentSide }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '10px',
        borderRadius: '5px',
        color: 'white',
      }}
    >
      <p>Please scan the {sideInstructions[currentSide]}</p>
    </div>
  );
};

export default OverlayInstructions;
