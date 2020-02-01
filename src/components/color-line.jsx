// @flow

import React from 'react';

import './color-line.css';

type Props = {
  colors: Array<string>,
}

export default ({ colors }: Props) => (
  <div className="color-line-container">
    <div className="color-line-title">Colors:</div>
    <div className="color-line-samples">
      {
        colors.map((color) => (
          <div
            key={color}
            className="color-line-sample"
            style={{ backgroundColor: color }}
          />
        ))
      }
    </div>
  </div>
);
