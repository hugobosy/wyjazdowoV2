import Cookies from 'universal-cookie';

const cookie = new Cookies();

export const ACCESS_TOKEN_COOKIE_NAME = 'wyjazdowo-access-token';

export const setAccessTokenCookie = (token: string) => {
  cookie.set(ACCESS_TOKEN_COOKIE_NAME, token, { path: '/' });
};

export const deleteAccessTokenCookie = () => {
  cookie.remove(ACCESS_TOKEN_COOKIE_NAME, { path: '/' });
};

export const getAccessTokenCookie = () => {
  return cookie.get(ACCESS_TOKEN_COOKIE_NAME);
};