import React, { useState} from "react";
import "./AddUser.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../ErrorModal/ErrorModal";

const AddUser = (props) => {
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({ title: "Invalid Details", message: "Please enter a valid username and age (non-empty values)" })
      return;
    }
    if (+age < 1) {
      setError({ title: "Invalid Details", message: "Please enter a valid age (> 0)" })
      return;
    }
    props.onSubmitForm(username, age)
    setAge("");
    setUsername("");
  };

  const onUsernameChangeHandler = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  }

  const onAgeChangeHandler = (event) => {
    event.preventDefault();
    setAge(event.target.value);
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      { error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} /> }
      <Card className="input" >
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input 
            id="username" 
            type="text" 
            value={username}
            onChange={onUsernameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input 
            id="age"  
            type="number"
            value={age}
            onChange={onAgeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
