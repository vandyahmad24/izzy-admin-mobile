const initKategori = {
  kategori: [],
};
export const kategoriReducer = (state = initKategori, action) => {
  if (action.type == 'SET_KATEGORI') {
    return {
      ...state,
      food: action.value,
    };
  }
  return state;
};
