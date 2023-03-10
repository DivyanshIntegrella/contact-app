import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {

    const deletecontact = (id) =>{
        props.removeContact(id);
    }

    const renderContact = props.contacts.map((contact) => {
        return(
            <ContactCard contact={contact} clickHandler={deletecontact} key={contact.id}/>
        );
    });
    return(
        <div className='list-group'>
            {renderContact}
        </div>
    );
}

export default ContactList;