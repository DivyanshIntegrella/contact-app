import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {

  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
    alert("Contact Added Successfully !!");
  }

  const removeContact = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

  return (
    <div className='container'>
      <Router>
      <Header />
        <Routes>
          <Route path="/" exact element={<ContactList contacts={contacts} removeContact={removeContact} />} />
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} className="my-10" />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
