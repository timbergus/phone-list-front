// @flow

import React from 'react';
import { useHistory } from 'react-router-dom';

import './phone-card.css';

export interface Phone {
  id: string;
  manufacturer: string;
  model: string;
  series: string;
  image: string;
  price: string;
  cameras: number;
  colors: Array<string>;
}

export default ({ phone, onSelect }: { phone: Phone, onSelect: Function }) => {
  const {
    manufacturer,
    model,
    series,
    image,
  } = phone;

  const history = useHistory();

  const handleNavigation = () => {
    onSelect(phone);
    history.push('/secure/detail');
  };

  return (
    <div
      tabIndex="0"
      role="button"
      className="phone-card-container"
      onClick={handleNavigation}
      onKeyPress={handleNavigation}
      data-test={`phone-card-${model}${series}`}
    >
      <div className="phone-card-title">{`${manufacturer} ${model} ${series}`}</div>
      <img
        className="phone-card-image"
        src={`http://localhost:3000/${image}`}
        alt={`${model} ${series}`}
      />
    </div>
  );
};
