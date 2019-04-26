import React from 'react';
import PropTypes from 'prop-types';

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

VolumeSlider.propTypes = {
  value: PropTypes.string.isRequired,
  changeVolume: PropTypes.func.isRequired
};

export default VolumeSlider;
