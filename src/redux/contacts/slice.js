import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import { fetchContacts, deleteContact, addContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
    extraReducers: (builder) => {
        builder.addCase(fetchContacts.pending, handlePending)
        builder.addCase(addContact.pending, handlePending)
        builder.addCase(deleteContact.pending, handlePending)    
        builder.addCase(fetchContacts.rejected, handleRejected)
        builder.addCase(addContact.rejected, handleRejected)
        builder.addCase(deleteContact.rejected, handleRejected)
        builder.addCase(fetchContacts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        })
        builder.addCase(addContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        })
        builder.addCase(deleteContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
            task => task.id === action.payload.id
            );
            state.items.splice(index, 1);
        })
        builder.addCase(logOut.fulfilled, (state) => {
            state.items = [];
            state.error = null;
            state.isLoading = false;
        })
  },
});

export const contactsReducer = contactsSlice.reducer;
