import { createSlice } from '@reduxjs/toolkit';
import { createPet, deletePet, fetchPets } from './petsOperation';
import { pendingFunc, rejectFunc } from '../operations/handlePendingAndReject';

const initialPets = {
  items: [],
  isLoading: false,
  error: null,
};

const petsStateSlice = createSlice({
  name: 'pets',
  initialState: initialPets,

  extraReducers: (builder) => {
    // fetch

    builder.addCase(fetchPets.pending, pendingFunc);
    builder.addCase(fetchPets.fulfilled, (_, action) => {
      return {
        items: action.payload.data.pets,
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(fetchPets.rejected, rejectFunc);

    // create

    builder.addCase(createPet.pending, pendingFunc);
    builder.addCase(createPet.fulfilled, (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload.data.pet],
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(createPet.rejected, rejectFunc);

    // delete

    builder.addCase(deletePet.pending, pendingFunc);

    builder.addCase(deletePet.fulfilled, (state, action) => {
      return {
        items: [...state.items.filter((el) => el._id !== action.payload)],
        isLoading: false,
        error: null,
      };
    });

    builder.addCase(deletePet.rejected, rejectFunc);
  },
});
export const petsStateReducer = petsStateSlice.reducer;
