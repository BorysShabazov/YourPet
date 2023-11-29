import { createSlice } from '@reduxjs/toolkit';
import { createPet, deletePet, fetchPets } from './petsOperation';

const initialPets = {
  items: [],
  isLoading: false,
  error: null,
  total: 0,
  qty: 0,
};

const rejectFunc = (state, action) => {
  return {
    items: state.items,
    isLoading: false,
    error: action.payload,
    total: state.total,
    qty: state.qty,
  };
};
const pendingFunc = (state) => {
  return {
    items: state.items,
    isLoading: true,
    error: null,
    total: state.total,
    qty: state.qty,
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
        items: [...action.payload.pets],
        isLoading: false,
        error: null,
        total: action.payload.total,
        qty: action.payload.qty,
      };
    });
    builder.addCase(fetchPets.rejected, rejectFunc);

    // create

    builder.addCase(createPet.pending, pendingFunc);
    builder.addCase(createPet.fulfilled, (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload.pet],
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(createPet.rejected, rejectFunc);

    // delete

    builder.addCase(deletePet.pending, pendingFunc);

    builder.addCase(deletePet.fulfilled, (state, action) => {
      return {
        ...state,
        items: [...state.items.filter((el) => el._id !== action.payload)],
        isLoading: false,
        error: null,
      };
    });

    builder.addCase(deletePet.rejected, rejectFunc);
  },
});
export const petsStateReducer = petsStateSlice.reducer;
