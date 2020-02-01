// @flow

import { Phone } from '../../components/phone-card';

const SET_PHONE = 'phone-list-front/phone/SET_PHONE';

const initialState = {
  phone: {},
};

export const setPhone = (phone: Phone) => ({ type: SET_PHONE, data: phone });

export default function reducer(state: Object = initialState, action: Object = {}) {
  switch (action.type) {
    case SET_PHONE:
      return { ...state, ...action.data };
    default:
      return state;
  }
}
