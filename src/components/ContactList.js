import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {

    const renderContact = props.contacts.map((contact) => {
        return(
            <ContactCard contact={contact} />
        );
    });
    return(
        <div className='list-group'>
            {renderContact}
        </div>
    );
}

export default ContactList;