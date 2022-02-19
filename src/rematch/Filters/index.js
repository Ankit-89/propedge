import { createBlacklistFilter } from 'redux-persist-transform-filter';

const auth = createBlacklistFilter('Auth', ['userID']);

export const AllFilters = [auth];
