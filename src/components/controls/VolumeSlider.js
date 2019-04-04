import React from 'react';

function VolumeSlider(props) {
  return (
    <React.Fragment>
      <input
        type="range"
        min="0"
        max="100"
        value={props.value}
        onChange={props.changeVolume}
      />
    </React.Fragment>
  );
}

export default VolumeSlider;
