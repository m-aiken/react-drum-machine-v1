import React from 'react';

function ReverbSlider(props) {
  return (
    <React.Fragment>
      <input
        type="range"
        min="0"
        max="100"
        value={props.value}
        onChange={props.changeReverb}
      />
    </React.Fragment>
  );
}

export default ReverbSlider;
