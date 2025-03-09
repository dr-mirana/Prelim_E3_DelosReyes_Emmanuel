import React from "react";

function UserInfo({ name }) {
  return (
    <div className="user-info">
      <h3>User Name: {name || "No name set"}</h3>
    </div>
  );
}

export default UserInfo;
