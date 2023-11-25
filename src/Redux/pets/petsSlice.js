import { createSlice } from '@reduxjs/toolkit';
import { createPets, deletePets, fetchPets } from './petsOperation';
import { pendingFunc, rejectFunc } from '../operations/handlePendingAndReject';

const initialPets = {
  items: [],
  isLoading: false,
  error: null,
};
console.log('initialPets: ', initialPets.items);
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

    builder.addCase(createPets.pending, pendingFunc);
    builder.addCase(createPets.fulfilled, (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload.data.pet],
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(createPets.rejected, rejectFunc);

    // delete

    builder.addCase(deletePets.pending, pendingFunc);
    //     builder.addCase(deletePets.fulfilled, (state, action) => {
    //       console.log('New state after delete:', state);

    //       return {
    //         ...state,
    //         items: state.items.filter((el) => el._id !== action.payload._id),
    //         isLoading: false,
    //         error: null,
    //       };
    //     });
    //     builder.addCase(deletePets.rejected, rejectFunc);
    //   },
    // });
    builder.addCase(deletePets.fulfilled, (state, action) => {
      const index = state.items.findIndex(
        (pet) => pet.id === action.payload.id,
      );
      state.items.splice(index, 1);
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(deletePets.rejected, rejectFunc);
  },
});
export const petsStateReducer = petsStateSlice.reducer;
