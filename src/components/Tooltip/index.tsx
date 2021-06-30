import React from 'react';
import PropTypes from 'prop-types';
import { capitalizeFirstLetter } from '../../utils/functions';
import './index.css';

function CustomTooltip({
  name, active, payload, label,
} : { name: string, active: boolean, payload: any, label: string }) {
  if (active && payload && label) {
    return (
      <div className="tooltip">
        <h4>{label.substring(0, 10)}</h4>
        <p>{label.substring(11, 16)}</p>
        <p>
          {capitalizeFirstLetter(name)}
          :
          {' '}
          {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
}

CustomTooltip.defaultProps = {
  active: null,
  payload: null,
  label: null,
};

CustomTooltip.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
  payload: PropTypes.instanceOf(Array),
  label: PropTypes.string,
};

export default CustomTooltip;
