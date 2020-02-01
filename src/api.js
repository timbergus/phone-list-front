// @flow

const PORT = 3000;
const URL = 'localhost';

const headers = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${window.sessionStorage.phoneListToken}`,
});

export const fetchLogin = (username: string, password: string) => fetch(
  `http://${URL}:${PORT}/login?username=${username}&password=${password}`,
);

export const fetchPhones = () => fetch(`http://${URL}:${PORT}/phones`, {
  headers: headers(),
});
