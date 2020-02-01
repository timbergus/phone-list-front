// @flow

import './secure.css';

import React from 'react';
import { Route, useLocation } from 'react-router-dom';

import Fab from '@material-ui/core/Fab';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';

import ListView from '../views/secure/list';
import DetailView from '../views/secure/detail';

type Props = {
  history: Object
};

export default (props: Props) => {
  const location = useLocation();

  const { history } = props;

  const handleLogout = () => {
    Reflect.deleteProperty(sessionStorage, 'phoneListToken');
    history.push('/login');
  };

  const handleReturn = () => history.push('/secure/list');

  const isList = () => location.pathname.includes('list');

  const getTitle = () => (isList() ? 'Phone List' : 'Phone Detail');

  return (
    <div>
      <nav className="navigation">
        <div className="navigation-title">{getTitle()}</div>
        <div>
          {
            !isList() && (
              <span style={{ marginRight: '10px' }}>
                <Fab size="small" color="primary" aria-label="add" onClick={handleReturn} data-test="go-back-button">
                  <ArrowBackIosIcon />
                </Fab>
              </span>
            )
          }
          <Button
            variant="contained"
            color="secondary"
            onClick={handleLogout}
            className="home-button"
          >
            Logout
          </Button>
        </div>
      </nav>
      <Route path="/secure/list" component={ListView} />
      <Route path="/secure/detail" component={DetailView} />
    </div>
  );
};
