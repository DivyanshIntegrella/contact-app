import React, { useState } from 'react';
import {v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) =>{
    setContacts([...contacts, {id: uuidv4(), ...contact}]);
  }

  const removeContact =(id) => {
    
  }

  return (
    <div className='container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} className="my-10" />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
