import React from 'react';
import { Link } from 'react-router-dom';
import user from '../images/user.png';

const ContactCard = (props) => {

    const {id, name, email} = props.contact;
    return(
        <div>
            <ul className='list-group list-group-flush'>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <img className='rounded-circle' src={user} alt='user' width="50px"/>
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{name}</div>
                        {email}
                    </div>
                    <Link to={{pathname: `/edit/${id}`, state: {contact: props.contact}}} className='my-2'><i className="bi bi-pencil-square fs-3" style={{color:"blue", cursor:"pointer", marginRight:15}} ></i></Link>
                    <i className="bi bi-trash3 fs-3 my-2" style={{color:"red", cursor:'pointer'}} onClick={() => props.clickHandler(id)}></i>
                </li>
            </ul>
            <hr />
        </div>
    );
}

export default ContactCard;