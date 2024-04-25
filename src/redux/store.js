import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    contact: contactsReducer,
    filter: filtersReducer,
  },
});
