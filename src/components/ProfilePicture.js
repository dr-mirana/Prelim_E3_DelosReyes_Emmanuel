import React from "react";

function ProfilePicture({ pictureUrl }) {
  return (
    <div className="profile-picture">
      <img
        src={pictureUrl || "https://via.placeholder.com/150"}
        alt="Profile"
        className="profile-img"
      />
    </div>
  );
}

export default ProfilePicture;
