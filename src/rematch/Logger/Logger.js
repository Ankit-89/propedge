export const logger = (store) => (next) => (action) => {
    console.log('dispatching', action);
    console.log('dispatching', action.payload);
    const result = next(action);
    console.log('next state', store.getState());
    return result;
  };
  