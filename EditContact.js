import React from 'react';

class EditContact extends React.Component {
    constructor(props) {
        super(props)
        console.log("prop:::",props);
        const {id, name, email} = props.location.state.contact;

        this.state = {
            id,
            name,
            email
        }
    }   

    update = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All the fields are mandatory!");
            return
        }
        this.props.updateContactHandler(this.state);
        this.setState({ name: "", email: "" }); 
    }

    render() {
        return (
            <div className="container">
                <h4>Update Contact</h4>
                <form className='form-control' onSubmit={this.update}>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput2" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput2" placeholder='Email' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: 80 }}>Update</button>
                </form>
            </div>
        );
    };
}

export default EditContact;