import { createSlice, createSelector } from "@reduxjs/toolkit";

import {
  apiAddContact,
  apiDeleteContact,
  apiFetchContacts,
} from "./contactsOps";
import { selectFilter } from "./filtersSlice";

const INITIAL_STATE = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contact",
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(apiFetchContacts.pending, (state) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(apiFetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(apiFetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(apiDeleteContact.pending, (state) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(apiDeleteContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;

        state.contacts.items = state.contacts.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(apiDeleteContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(apiAddContact.pending, (state) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(apiAddContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;

        state.contacts.items = state.contacts.items.toSpliced(
          state.contacts.items.length + 1,
          0,
          action.payload
        );
      })
      .addCase(apiAddContact.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      });
  },
});

// Генератори екшенів
// export const { addContact, deleteContact } = contactsSlice.actions;

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

export const selectContacts = (state) => {
  return state.contact.contacts.items;
};

export const selectLoading = (state) => {
  return state.contact.contacts.loading;
};

export const selectError = (state) => {
  return state.contact.contacts.error;
};

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
);
