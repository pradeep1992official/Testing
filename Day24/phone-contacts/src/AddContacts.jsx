import React from "react";
import Header from "./Header";

function AddContacts(props) {
  return (
    <div>
      <Header name="Add Contacts"></Header>
      <div className="align_form">
        <div className="form">
          <div className="subForm">
            <span>Name</span>
            <span>Mobile Number</span>
            <span>Actions</span>
          </div>
          
          {props.contactList.map((contact) => (
            <div id={contact.id} className="subForm">
              <span>{contact.name}</span>
              <span>{contact.phone}</span>
              <span>
                <button className="delBtn">Delete</button>
              </span>
            </div>
          ))}
          
        </div>
        <button className="btn">ADD</button>
      </div>
    </div>
  );
}

export default AddContacts;
