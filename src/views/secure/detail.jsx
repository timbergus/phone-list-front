// @flow

import './detail.css';

import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import InfoLine from '../../components/info-line';
import ColorLine from '../../components/color-line';
import { Phone } from '../../components/phone-card';

const DetailView = ({ phone }: { phone: Phone }) => {
  const history = useHistory();

  const {
    id,
    manufacturer,
    model,
    series,
    price,
    cameras,
    colors,
  } = phone;

  const handleSelectPhone = () => history.push('/secure/list');

  if (id) {
    return (
      <div className="detail-card">
        <InfoLine title="Manufacturer" value={manufacturer} />
        <InfoLine title="Model" value={model} />
        <InfoLine title="Series" value={series} />
        <InfoLine title="Price" value={price} />
        <InfoLine title="Cameras" value={cameras} />
        <ColorLine colors={colors} />
      </div>
    );
  }

  return (
    <div className="detail-content">
      <Button
        variant="contained"
        color="primary"
        onClick={handleSelectPhone}
      >
        Select a Phone
      </Button>
    </div>
  );
};

// Redux connect.

const mapStateToProps = (state) => {
  const {
    phone,
  } = state;
  return {
    phone,
  };
};

export default connect(mapStateToProps)(DetailView);
