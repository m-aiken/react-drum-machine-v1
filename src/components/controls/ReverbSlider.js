import React from 'react';
import PropTypes from 'prop-types';

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

ReverbSlider.propTypes = {
  value: PropTypes.string.isRequired,
  changeReverb: PropTypes.func.isRequired
};

export default ReverbSlider;
