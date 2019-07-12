import React from 'react';
import PropTypes from 'prop-types';

const InstrumentTitle = props => {
  return <div className="instrument-title">{props.name}</div>;
};

InstrumentTitle.propTypes = {
  name: PropTypes.string.isRequired
};

export default InstrumentTitle;
