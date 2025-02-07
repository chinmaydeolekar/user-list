import Card from "../UI/Card";
import React from "react";
import "./UserLists.css"

const UserLists = (props) => {
    return (
        <Card className="users">
            <ul className="users">
                {props.users.map((item) => {
                    return (
                        <li className="users" key={item.id}>
                            {item.username} ({item.age} years old)
                        </li>
                    )
                })}
            </ul>
        </Card>
    )
}

export default UserLists;