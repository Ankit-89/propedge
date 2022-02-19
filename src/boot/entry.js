import React, { useEffect } from 'react';
import HomeNavigator from '../../routes/homeStack';
import AuthNavigator from '../../routes/AuthStack';
import useAsyncStorage from '../../src/hooks/useAsyncStorage';
import { useDispatch } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

function Entry() {
  const [user] = useAsyncStorage('user', {});
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch.Auth.setUserData(user);
    }
    SplashScreen.hide();
  }, [user])
  return (
    <>
     {user && Object.keys(user).length > 0 ? <AuthNavigator /> : <HomeNavigator />}
    </>
  )
}

export default Entry;