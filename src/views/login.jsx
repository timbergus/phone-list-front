// @flow

import './login.css';

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import { LoadStateRed } from '../components/load-state';

import { fetchLogin } from '../api';

export default () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await fetchLogin('username', 'password');
      const { token } = await response.json();
      window.sessionStorage.phoneListToken = token;
      setLoading(false);
      history.push('/secure/list');
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  if (loading) {
    return <LoadStateRed />;
  }

  if (error) {
    return <h1>Error!</h1>;
  }

  return (
    <div className="login-content">
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        data-test="login-button"
      >
        Login
      </Button>
    </div>
  );
};
