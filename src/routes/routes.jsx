// @flow

import './routes.css';

import React, { Component } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';

import LoginView from '../views/login';
import SecureComponent from './secure';

type Props = {};

export default class Routes extends Component<Props> {
  isLogged = () => window.sessionStorage.phoneListToken && window.sessionStorage.phoneListToken !== '';

  admit = () => <Redirect to="/secure/home" />;

  expel = () => <Redirect to="/login" />;

  render() {
    return (
      <HashRouter>
        <div className="routes-container">
          <Route
            exact
            path="/"
            render={() => (this.isLogged()
              ? this.admit()
              : this.expel()
            )}
          />
          <Route
            exact
            path="/login"
            render={(props) => (this.isLogged()
              ? this.admit()
              : <LoginView {...props} />
            )}
          />
          <Route
            exact
            path="/secure"
            render={() => (this.isLogged()
              ? this.admit()
              : this.expel()
            )}
          />
          <Route
            path="/secure"
            render={(props) => (this.isLogged()
              ? <SecureComponent {...props} />
              : this.expel()
            )}
          />
        </div>
      </HashRouter>
    );
  }
}
