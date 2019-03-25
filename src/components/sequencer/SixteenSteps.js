import React from 'react';
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

export default SixteenSteps;
