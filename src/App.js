import React, { useState } from "react";
import UserLists from "./components/UserLists/UserLists";
import AddUser from "./components/Users/AddUser";

function App() {
  const [users, setUsers] = useState([]);
  const onSubmitFormHandler = (uName, uAge) => {
    setUsers((previousUsers) => {
      return [...previousUsers, { username: uName, age: uAge, id: Math.random().toString()}];
    })
  }

  return (
    <div>
        <AddUser onSubmitForm={onSubmitFormHandler}/>
        <UserLists users={users} />
    </div>
  );
}

export default App;