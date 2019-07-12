import React from 'react';
import PropTypes from 'prop-types';

const matchers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function TimeBar(props) {
  return (
    <div className="timebar">
      {matchers.map(matcher => {
        return (
          <div
            key={matcher}
            className="tb-box"
            style={
              props.index === matcher
                ? { background: '#5dfc0a' }
                : { background: '' }
            }
          />
        );
      })}
    </div>
  );
}

TimeBar.propTypes = {
  index: PropTypes.number.isRequired
};

export default TimeBar;
