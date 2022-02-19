import createRematchPersist from '@rematch/persist';
import AsyncStorage from '@react-native-community/async-storage';
import {AllFilters} from '../Filters';

export const persistPlugin = createRematchPersist({
  key: 'root',
  whitelist: ['Auth', 'Appointment'],
  // blacklist: blackList,
  // throttle: 3000,
  version: 1,
  storage: AsyncStorage,
  transforms: AllFilters,
});
