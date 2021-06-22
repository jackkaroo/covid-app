import React from 'react';
import capitalizeFirstLetter from '../../../utils/functions';
import './index.css';

export default function CustomTooltip({
  name, active, payload, label,
}) {
  if (active && payload && label) {
    return (
      <div className="tooltip">
        <h4>{label.substring(0, 10)}</h4>
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
