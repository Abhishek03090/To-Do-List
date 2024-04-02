import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import todo from "../Assests/todo.png";
import "../App.css";

export default function Header(props) {
  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn");
    window.location.reload(); // Reload the page to trigger redirect if necessary
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="#"><img src={todo} style={{width:"5pc"}}/></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/">Home </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/profile">Profile</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" onClick={handleLogout}>Log Out</Link>
            </li>
          </ul>
        </div>
      </nav>

    </>
  );
}

Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true
};

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
};
