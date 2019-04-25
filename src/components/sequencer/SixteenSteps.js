import React from 'react';
import PropTypes from 'prop-types';

import SingleStep from './SingleStep';

function SixteenSteps(props) {
  return props.steps.map(step => (
    <div className={step.checked === false ? 'seq-box' : 'seq-box-active'}>
      <SingleStep
        key={step.step}
        step={step}
        updateChecked={props.updateChecked}
      />
    </div>
  ));
}

SixteenSteps.propTypes = {
  steps: PropTypes.array.isRequired,
  updateChecked: PropTypes.func.isRequired
};

export default SixteenSteps;
