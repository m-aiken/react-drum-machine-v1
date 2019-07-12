import React from 'react';
import PropTypes from 'prop-types';

function PitchSlider(props) {
  return (
    <div className="slider">
      <input
        type="range"
        min="1"
        max="17"
        value={props.value}
        onChange={props.changePitch}
      />
    </div>
  );
}

PitchSlider.propTypes = {
  value: PropTypes.string.isRequired,
  changePitch: PropTypes.func.isRequired
};

export default PitchSlider;
