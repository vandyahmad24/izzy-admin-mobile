import {createStore} from 'redux';

const initialValue = {
  loading: false,
};

const reducer = (state = initialValue, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
