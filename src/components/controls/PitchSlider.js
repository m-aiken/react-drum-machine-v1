import React from 'react';

function PitchSlider(props) {
  return (
    <React.Fragment>
      <input
        type="range"
        min="1"
        max="17"
        value={props.sliderValue}
        onChange={props.changePitch}
      />
    </React.Fragment>
  );
}

export default PitchSlider;
