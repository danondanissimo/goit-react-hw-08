import "./App.css";

import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import ContactList from "./components/ContactList/ContactList.jsx";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox.jsx";

import { apiFetchContacts } from "./redux/contactsOps.js";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";

import Loader from "./components/Loader/Loader.jsx";

import { selectError, selectLoading } from "./redux/contactsSlice.js";

function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);

  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(apiFetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}

      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
