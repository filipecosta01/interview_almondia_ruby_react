// @flow weak

import { Base64 }  from 'js-base64';

/*
  window.location.origin polyfill
 */
export const getLocationOrigin = () => {
  return 'http://localhost:3002';
};

/*
  query options:
 */
export const getMethod = {
  method: 'get'
};

export const postMethod = {
  method: 'post'
};

export const defaultOptions = {
  // credentials: 'same-origin'
};

export const jsonHeader = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
};

/*
 general helpers
 */
export const encodeBase64 = (stringToEncode) => {
  return Base64.encode(stringToEncode);
};