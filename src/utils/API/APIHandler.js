// import { Alert } from 'react-native';
import { Observable, throwError, from } from 'rxjs';
import {
  mergeMap,
  retryWhen,
  take,
  delay,
  catchError,
  map,
} from 'rxjs/operators';
import axios, { AxiosPromise } from 'axios';
import * as Globals from '../common/Globals';
import { useSelector } from 'react-redux';
import useAsyncStorage from '../../hooks/useAsyncStorage';
import store from '../../rematch';


async function handleRequest(req) {
  console.log({ req });
  console.log('API URL ---->', req.url);
  console.log('METHOD --->', req.method);
  console.log('HEADER -->', JSON.stringify(req.headers));
  console.log('DATA ->', req.data);
  // req.headers.Accept = 'application/json';
  const user = store.getState().Auth.user
  if (Object.keys(user).length > 0) {
    console.log('Token ->', user.data.refresh_token);
    req.headers = {...req.headers, 'Authorization' : `Bearer ${user.data.refresh_token}`}
  }
  return req;
}

/**
 * This is used to manage errors from api calls by checking needed information
 * before responding to the caller.
 * @param err
 * @returns {Observable<never>}
 */
function errorHandler(err) {
  const message = Globals.errorEncountered;
  if (err && err.status === 0) Object.assign(err.data, { message });
  // if (err.code === 'ECONNABORTED') Alert.alert(Globals.timeoutMessage);
  console.log({ err });
  return throwError(err);
}

/**
 * This is used to modify the header request and relies on some header constraints
 * to generate some header fields
 */
axios.interceptors.request.use(
  async req => await handleRequest(req),
  error => Promise.reject(error),
);

/**
 * This takes in a promise and convert to an observable
 * then makes the api request, it tries the api call 2 times only if failed
 * before responding to the caller.
 * @param apiCaller
 * @returns {Observable<*>}
 */
function processApiRequest(apiCaller) {
  return from(apiCaller).pipe(
    retryWhen(errors =>
      errors.pipe(
        mergeMap(err => errorHandler(err)),
        delay(1000),
        take(2),
      ),
    ),
    catchError(err => errorHandler(err.response)),
    map(res => res.data),
  );
}

/** *
 * The ApiHandler framework with observable
 */
export default {
  post: (url, data, options) => {
    const config = options && { headers: options }
      ? { headers: options, timeout: Globals.timeoutDuration }
      : { timeout: Globals.timeoutDuration };
    return processApiRequest(axios.post(url, data, config));
  },
  put: (url, data, options) => {
    const config = options && { headers: options }
      ? { headers: options, timeout: Globals.timeoutDuration }
      : { timeout: Globals.timeoutDuration };
    return processApiRequest(axios.put(url, data, config));
  },
  delete: (url, options, data) => {
    data = data
      ? data instanceof Object && !Object.keys(data).length
        ? null
        : data
      : null;
    const config = data
      ? { headers: options, data, timeout: Globals.timeoutDuration }
      : { headers: options, data: '', timeout: Globals.timeoutDuration };
    return processApiRequest(axios.delete(url, config));
  },
  get: (url, options, data) => {
    data = data
      ? data instanceof Object && !Object.keys(data).length
        ? null
        : data
      : null;
    const config = data
      ? { headers: options, data, timeout: Globals.timeoutDuration }
      : { headers: options, data: '', timeout: Globals.timeoutDuration };
    return processApiRequest(axios.get(url, config));
  },
  uploadImage: (url, image) => {
    let pathParts = image.path.split('/');

    const formData = new FormData();
    formData.append('file', {
      uri: image.path,
      name: pathParts[pathParts.length - 1],
      type: image.mime,
    });
    
    return axios.post(url, formData, {
      headers: { "Content-type": "multipart/form-data" }
    });
  },

};
