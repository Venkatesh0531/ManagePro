import React from "react";

const UserProfile = () => {
  return (
    <div>
      <div>
        <img
          src="https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200
" // Replace with the URL of the user's profile picture
          alt="User Profile"
          style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" }}
        />
      </div>
      <div>
        <h2>My Work Space</h2>
        <p></p>
      </div>
    </div>
  );
};

export default UserProfile;
