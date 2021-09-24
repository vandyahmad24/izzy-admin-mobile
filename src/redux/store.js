import {createStore} from 'redux';

const initialValue = {
  loading: false,
  token: null,
};

const reducer = (state = initialValue, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  }
  if (action.type === 'SET_TOKEN') {
    return {
      ...state,
      token: action.value,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
