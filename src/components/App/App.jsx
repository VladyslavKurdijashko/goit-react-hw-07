import { useDispatch, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../../redux/store";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";
import { addContact, deleteContact } from "../../redux/contactsSlice";

import ContactForm from "../ContactsForm/ContactsForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import styles from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <PersistGate loading={null} persistor={persistor}>
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={handleAddContact} />
        <SearchBox value={filter} onChange={handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDelete={handleDeleteContact}
        />
      </div>
    </PersistGate>
  );
};

export default App;
