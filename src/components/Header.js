import React from "react";
import { Link } from "react-router-dom";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

const Header = () => {
    return(
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid" style={{justifyContent:"center", fontSize:24, fontWeight:"bold", textDecoration:"underline"}}>
                Contact Manager
            </div>
            <ul style={{marginTop:20}}>
                <Link to="/" style={{textDecoration:"none", marginTop:50, fontSize:18}}>Contact List</Link>
            </ul>
            <button className="btn btn-primary" style={{margin:10}}>
                <Link to="/add" style={{color:"white", textDecoration:"none"}}>Add Contact</Link>
            </button>
        </nav>
    );
}

export default Header;
export {ContactList, AddContact};