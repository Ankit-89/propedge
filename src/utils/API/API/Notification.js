import APIHandler from '../APIHandler';
import {API} from '../../common';

export default {
  getNotification: data =>
    APIHandler.get(
      API.URL +
        API.Notification.List +
        `?page=${data.page}&page_size=${data.pageSize}`,
    ),
};
