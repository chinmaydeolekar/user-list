import React, { useState } from "react";

const addUserHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    // props.onAddUser(event.target.value)
}

const AddUser = () => {
    return ( <div>
        <form onSubmit={addUserHandler}>
          <label htmlFor="Username">Name</label>
          <input type="text" id="username" name="UserName" /><br />
          <label htmlFor="Age">Age</label>
          <input type="Number" id="age" name="Age" /><br />
          <button type="submit">Add User</button>
        </form>
    </div> )
}

export default AddUser