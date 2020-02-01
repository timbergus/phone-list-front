// @flow

import React from 'react';

import './info-line.css';

type Props = {
  title: string,
  value: string,
}

export default ({ title, value }: Props) => (
  <div className="info-line-container">
    <span className="info-line-title">{`${title}:`}</span>
    &nbsp;
    {value}
  </div>
);
