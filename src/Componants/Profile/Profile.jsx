import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const storedName = localStorage.getItem("name") || "";
  const storedEmail = localStorage.getItem("email") || "";
  const storedPassword = localStorage.getItem("password") || "";

  const [name, setName] = useState(storedName);
  const [email, setEmail] = useState(storedEmail);
  const [password, setPassword] = useState(storedPassword);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="profile-input-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="profile-input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="profile-input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="profile-update-btn">Update Profile</button>
      </form>
      {error && <p className="profile-error">{error}</p>}
    </div>
  );
};

export default Profile;
