export const rejectFunc = (state, action) => {
  return {
    items: state.items,
    isLoading: false,
    error: action.payload,
  };
};
export const pendingFunc = (state) => {
  return {
    items: state.items,
    isLoading: true,
    error: null,
  };
};
