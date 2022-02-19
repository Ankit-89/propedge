import {AuthHandler} from '../../utils/API/API';
import AsyncStorage from '@react-native-community/async-storage';
export const Auth = {
  state: {
    admin: {},
    userType: 'Auditor', // Possible Values Auditor or Owner
    adminType: undefined,
    userID: '1',
    arrPost: [],
    user: {},
  },
  reducers: {
    setAdmin(state, payload) {
      return {
        ...state,
        admin: payload,
        adminType: payload?.workspace?.permissions[0],
      };
    },
    setPosts(state, payload) {
      return {
        ...state,
        arrPost: payload,
      };
    },
    clear(state) {
      AsyncStorage.setItem('user', JSON.stringify({}));
      AsyncStorage.clear();
    },
    setUserData(state, payload) {
      AsyncStorage.setItem('user', JSON.stringify(payload || {}));
      return {
        ...state,
        user: payload,
      };
    },
  },
  effects: dispatch => ({
    async loginUser(payload) {
      try {
        const data = await AuthHandler.login(payload).toPromise();
        const newData = {...payload, ...data};
        return newData;
        // dispatch.Auth.setUserData(data);
      } catch (error) {
        console.log('error', error);
        return error;
      }
    },
    logoutUser(navigation) {
      try {
        dispatch.Auth.clear(navigation);
        navigation.navigate('Authenticate');
        //navigation.navigate('UserType');
      } catch (error) {
        console.log('error', error);
      }
    },
    async verifyOtp(payload) {
      try {
        const data = await AuthHandler.verifyOtp(payload).toPromise();
        const newData = {...payload, ...data};
        return newData;
      } catch (error) {
        console.log('error', error);
      }
    },

    async postList() {
      try {
        const data = await AuthHandler.postList().toPromise();
        dispatch.Auth.setPosts(data);
      } catch (error) {
        console.log('error', error);
      }
    },
  }),
};
