// @flow

import './list.css';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPhones } from '../../redux/reducers/phones';
import { setPhone } from '../../redux/reducers/phone';

import { LoadStateBlue } from '../../components/load-state';

import PhoneCard, { Phone } from '../../components/phone-card';

type Props = {
  _getPhones: Function,
  _setPhone: Function,
  phones: Array<Phone>,
  phonesLoading: boolean,
  phonesError: string,
}

const ListView = (props: Props) => {
  const {
    phones,
    phonesLoading,
    phonesError,
    _getPhones,
    _setPhone,
  } = props;

  useEffect(() => {
    if (phones.length === 0) {
      _getPhones();
    }
  }, []);

  const handleSelect = (phone) => {
    _setPhone(phone);
  };

  if (phonesLoading) {
    return <LoadStateBlue />;
  }

  if (phonesError) {
    return <h1>Error!</h1>;
  }

  return (
    <div className="list-container">
      {
        phones.map((phone: Phone) => (
          <PhoneCard
            key={phone.id}
            phone={phone}
            onSelect={handleSelect}
          />
        ))
      }
    </div>
  );
};

// Redux connect.

const mapStateToProps = (state) => {
  const {
    phones,
    phonesLoading,
    phonesError,
  } = state.phones;
  return {
    phones,
    phonesLoading,
    phonesError,
  };
};

const mapDispatchToProps = {
  _getPhones: getPhones,
  _setPhone: setPhone,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
