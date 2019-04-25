import React from 'react';
import PropTypes from 'prop-types';

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

PitchSlider.propTypes = {
  sliderValue: PropTypes.number.isRequired,
  changePitch: PropTypes.func.isRequired
};

export default PitchSlider;
