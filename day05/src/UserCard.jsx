import React from "react";

function UserCard({ users }) {
  if (users.length>3) {
    throw new Error("Users not found");
  }

  if (users.length === 0) {
    return <p className="empty">No users added yet</p>;
  }

  return (
    <ul className="user-list">
      {users.map((user, index) => (
        <li className="user-item" key={index}>
          {user}
        </li>
      ))}
    </ul>
  );
}

export default UserCard;
