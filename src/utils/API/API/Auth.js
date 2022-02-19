import APIHandler from '../APIHandler';
import {API} from '../../common';

export default {
  login: data => APIHandler.post(API.URL + API.User.Login, data),
  verifyOtp: data => APIHandler.post(API.URL + API.Auth.VerifyOtp, data),
  logOut: () => APIHandler.post(API.URL + API.User.LogOut),
  postList: () => APIHandler.get(API.URL + API.Post.List),
};
