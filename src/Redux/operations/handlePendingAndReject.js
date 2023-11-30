export const rejectFunc = (state, action) => {
  return {
    items: state.items,
    isLoading: false,
    error: action.payload,
    total:0,
  };
};
export const pendingFunc = (state) => {
  return {
    items: state.items,
    isLoading: true,
    error: null,
    total:0
  };
};
