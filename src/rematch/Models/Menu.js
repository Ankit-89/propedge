import {MenuHandler} from '../../utils/API/API';
export const Menu = {
  state: {
    webPage: '',
    pages: []
  },
  reducers: {
    setWebPage(state, payload) {
      return {
        ...state,
        webPage: payload,
      };
    },
    setPages(state, payload) {
      return {
        ...state,
        pages: payload,
      };
    },
  },
  effects: dispatch => ({
    async GetAllPages(payload) {
      const response = await MenuHandler.getPages().toPromise();
      if (response.data) {
        dispatch.Menu.setPages(response.data)
      } else {
        dispatch.Menu.setPages([])
      }
    },

    async getPageContent(payload) {
      const response = await MenuHandler.getSignlePages(payload).toPromise();
      if (response.data) {
        const newData = {...response};
        return newData;
      } else {
        console.log('error')
      }
    },
  }),
};
