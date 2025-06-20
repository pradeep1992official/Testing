import React from "react";
import Header from "./Header";

function ShowContacts() {
  return (
    <div>
      <Header name="Show Contacts"></Header>
      <div className = "align_form">
      <div className="form">
          <span>Name</span>
          <span>Mobile Number</span>
      </div>
      <button>SHOW</button>
      </div>
    </div>
  );
}

export default ShowContacts;
