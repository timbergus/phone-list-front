// @flow

import { fetchPhones } from '../../api';

const GET_PHONES = 'phone-list-front/phones/GET_PHONES';

const initialState = {
  phones: [],
  phonesLoading: false,
  phonesError: '',
};

export function getPhones() {
  return (dispatch: Function) => {
    dispatch({
      type: GET_PHONES,
      data: {
        phonesLoading: true,
      },
    });
    fetchPhones()
      .then((response) => response.json())
      .then((phones) => {
        dispatch({
          type: GET_PHONES,
          data: {
            phones,
            phonesLoading: false,
            phonesError: '',
          },
        });
      })
      .catch((error) => dispatch({
        type: GET_PHONES,
        data: {
          phonesLoading: false,
          phonesError: error.message,
        },
      }));
  };
}

export default function reducer(state: Object = initialState, action: Object = {}) {
  switch (action.type) {
    case GET_PHONES:
      return { ...state, ...action.data };
    default:
      return state;
  }
}
