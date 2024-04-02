import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
// import {todos} from "../../Assests/todo.png";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // State to manage success/error messages
  const navigate = useNavigate();
  // const history = useHistory();

  const handleSwitch = () => {
    setIsSignup(!isSignup);
    setName("");
    setEmail("");
    setPassword("");
    setMessage(""); // Clear any previous messages when switching between login/signup
  };

  const handleRegistration = () => {
    // Simulate registration by storing data in localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('name', name);
    setMessage('Registration successful!'); // Set success message
    setTimeout(() => {
      setMessage(""); // Clear success message after a while
      navigate('/login'); // Redirect to login page after successful registration
    }, 20000); // Redirect after 20   second
  };

  const handleLogin = () => {
    // Simulate login by comparing with data stored in localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
      onLogin(); // Update login status
      navigate('/'); // Redirect to home page
    } else {
      setMessage("Invalid credentials"); // Set error message
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      handleRegistration();
    } else {
      handleLogin();
    }
  };

  return (
    <section className="auth-section">
    
      <div className="auth-container-2">
      {isSignup? <h2>Registration Page</h2>: <h2>Login Page</h2>}
      <p style={{ fontSize: "20px", fontWeight: "bold", color: message.includes('successful') ? 'green' : 'red' }}>
          {message}
        </p>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <>
            
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            </>
          )}
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!isSignup && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  Forgot password?
                </p>
              )}
          </label>
          <button type="submit" className="auth-btn">
            {isSignup ? "Sign up" : "Log in"}
          </button>
        </form>

        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignup ? "Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Login;
