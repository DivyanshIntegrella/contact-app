import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import EditContact from './EditContact';
import api from '../api/contacts';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {

  const [contacts, setContacts] = useState([]);

  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    const request = {
      id: uuidv4(),
      ...contact
    }

    const response = await api.post("/contacts", request)
    setContacts([...contacts, response.data]);
    alert("Contact Added Successfully !!");
  }

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = response.data
    setContacts(contacts.map((contact) => {
      return contact.id === id ? { id, name, email } : contact;
    })
    );
  }

  const removeContact = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if(allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  return (
    <div className='container'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ContactList contacts={contacts} removeContact={removeContact} />} />
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} className="my-10" />} />
          <Route path="/edit" render={(props) => (<EditContact {...props} updateContactHandler={updateContactHandler} className="my-10" />)} element={<EditContact updateContactHandler={updateContactHandler} className="my-10" />}  />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
