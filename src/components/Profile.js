import React, { useState } from "react";
import UserInfo from "./UserInfo";
import ProfilePicture from "./ProfilePicture";
import Settings from "./Settings";

function Profile() {
  const [user, setUser] = useState({
    name: "",
    settings: {
      darkMode: false,
    },
  });

  const updateUserName = (name) => {
    setUser((prevState) => ({
      ...prevState,
      name: name,
    }));
  };

  const toggleDarkMode = () => {
    setUser((prevState) => {
      const newSettings = {
        darkMode: !prevState.settings.darkMode,
      };

      // Toggle body class based on dark mode status
      if (newSettings.darkMode) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
      } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
      }

      return {
        ...prevState,
        settings: newSettings,
      };
    });
  };

  return (
    <div
      className={`profile-container ${
        user.settings.darkMode ? "dark" : "light"
      }`}
    >
      <h2>User Profile</h2>
      <ProfilePicture />
      <UserInfo name={user.name} />
      <Settings
        darkMode={user.settings.darkMode}
        toggleDarkMode={toggleDarkMode}
        updateUserName={updateUserName}
      />
    </div>
  );
}

export default Profile;
