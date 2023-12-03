import { createSlice } from '@reduxjs/toolkit';
import {
  addToFavorite,
  createNotice,
  deleteNotice,
  fetchNotices,
  getNoticeById,
} from './noticesOperation';

const initialNotices = {
  items: [],
  isLoading: false,
  error: null,
  selectedNotice: null,
  total: 0,
};

const rejectFunc = (state, action) => {
  return {
    items: state.items,
    isLoading: false,
    error: action.payload,
    total: 0,
  };
};
const pendingFunc = (state) => {
  return {
    ...state,
    items: state.items,
    isLoading: true,
    error: null,
  };
};

const noticesStateSlice = createSlice({
  name: 'notices',
  initialState: initialNotices,

  extraReducers: (builder) => {
    // fetch

    builder.addCase(fetchNotices.pending, pendingFunc);
    builder.addCase(fetchNotices.fulfilled, (_, action) => {
      return {
        items: [...action.payload.notices],
        isLoading: false,
        error: null,
        total: action.payload.total,
      };
    });
    builder.addCase(fetchNotices.rejected, rejectFunc);

    //getNoticeById

    builder.addCase(getNoticeById.pending, pendingFunc);
    builder.addCase(getNoticeById.fulfilled, (state, action) => {
      return {
        ...state,
        selectedNotice: action.payload,
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(getNoticeById.rejected, rejectFunc);

    // create

    builder.addCase(createNotice.pending, pendingFunc);
    builder.addCase(createNotice.fulfilled, (state, action) => {
      return {
        ...state,
        items: [action.payload.data, ...state.items],
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(createNotice.rejected, rejectFunc);

    // delete

    builder.addCase(deleteNotice.pending, pendingFunc);
    builder.addCase(deleteNotice.fulfilled, (state, action) => {
      return {
        items: [...state.items.filter((el) => el._id !== action.payload)],
        isLoading: false,
        error: null,
        total: state.total - 1,
      };
    });
    builder.addCase(deleteNotice.rejected, rejectFunc);

    // add to favorite

    builder.addCase(addToFavorite.pending, pendingFunc);
    builder.addCase(addToFavorite.fulfilled, (state, action) => {
      const index = state.items.findIndex(
        (el) => el._id === action.payload._id,
      );

      if (index !== -1) {
        return {
          ...state,
          items: state.items.map((el, i) =>
            i === index ? action.payload : el,
          ),
          isLoading: false,
          error: null,
          selectedNotice: action.payload,
        };
      }

      return state;
    });
    builder.addCase(addToFavorite.rejected, rejectFunc);
  },
});

export const noticesStateReducer = noticesStateSlice.reducer;
