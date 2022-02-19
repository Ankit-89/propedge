import {NotificationHandler} from '../../utils/API/API';
export const Notification = {
  state: {
    arrNotification: [],
  },
  reducers: {
    setNotification(state, payload) {
      return {
        ...state,
        arrNotification: payload,
      };
    },
  },
  effects: dispatch => ({
    async GetNotification(payload) {
      try {
        const {data} = await NotificationHandler.getNotification({
          page: 1,
          pageSize: 10,
        }).toPromise();
        dispatch.Notification.setNotification(data);
      } catch (error) {
        console.log('error', error);
      }
    },
  }),
};
