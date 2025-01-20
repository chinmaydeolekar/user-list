// Write your code at relevant places in the code below:

import React, { useState } from "react";
import UserList from "./components/UserLists/UserList";
import AddUser from "./components/User/AddUser";

function App() {
  // const [finalList, setList] = useState([]);

  // function onAddUserHandler (user) {
  //   setList((prevUsers) => {
  //     user.id = prevUsers.length + 1;
  //     return [...prevUsers, user]
  //   })
  // }
  return (
    <div>
      <section>
        <AddUser/>
        {/* <UserList >{finalList}</UserList> */}
      </section>
    </div>
  );
}

export default App;
 