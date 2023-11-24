import { createSlice } from '@reduxjs/toolkit';
import { createPets, deletePets, fetchPets } from './petsOperation';

const initialPets = {
  items: [],
  isLoading: false,
  error: null,
};

const rejectFunc = (state, action) => {
  return {
    items: state.items,
    isLoading: false,
    error: action.payload,
  };
};
const pendingFunc = (state) => {
  return {
    items: state.items,
    isLoading: true,
    error: null,
  };
};

const petsStateSlice = createSlice({
  name: 'pets',
  initialState: initialPets,

  extraReducers: (builder) => {
    // fetch

    builder.addCase(fetchPets.pending, pendingFunc);
    builder.addCase(fetchPets.fulfilled, (_, action) => {
      return {
        items: [...action.payload],
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(fetchPets.rejected, rejectFunc);

    // create

    builder.addCase(createPets.pending, pendingFunc);
    builder.addCase(createPets.fulfilled, (state, action) => {
      return {
        items: [action.payload.data, ...state.items],
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(createPets.rejected, rejectFunc);

    // delete

    builder.addCase(deletePets.pending, pendingFunc);
    builder.addCase(deletePets.fulfilled, (state, action) => {
      return {
        items: [...state.items.filter((el) => el.id !== action.payload)],
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(deletePets.rejected, rejectFunc);
  },
});

export const petsStateReducer = petsStateSlice.reducer;
