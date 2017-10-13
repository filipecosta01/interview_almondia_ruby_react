// @flow weak

import axios          from 'axios';
import {
  getMethod,
  jsonHeader,
  defaultOptions,
  getLocationOrigin
}                     from '../fetchTools';

export const getCategories = (
  endpoint = 'categories'
) => {
  const method  = getMethod.method;
  const headers = jsonHeader;
  const url     = `${getLocationOrigin()}/${endpoint}`;
  const options = {...defaultOptions};

  return axios.request({
    method,
    url,
    withCredentials: false,
    ...headers,
    ...options
  })
  .then(data => data)
  .catch(error => Promise.reject(error));
};