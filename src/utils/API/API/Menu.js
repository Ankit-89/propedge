import APIHandler from '../APIHandler';
import { API } from '../../common';

export default {
  getAboutUs: () => APIHandler.get(API.URL + API.Menu.AboutUs),
  getTerms: () => APIHandler.get(API.URL + API.Menu.Terms),
  getPrivacy: () => APIHandler.get(API.URL + API.Menu.Privacy),
  getCancellation: () => APIHandler.get(API.URL + API.Menu.Cancellation),
  getPages: () => APIHandler.get(API.URL + API.Menu.AllPages),
  getSignlePages: (data) => APIHandler.get(API.URL + API.Menu.AllPages + `/${data}`),
};