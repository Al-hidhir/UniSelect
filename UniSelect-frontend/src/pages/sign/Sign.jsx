import React, { useState } from 'react';
import { loginUser } from '../../api'; 
import { useNavigate, Link } from 'react-router-dom';
import './Sign.css'; 

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      setToken(response.token);
      alert('Login successful!');
      navigate('/admin'); 
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed!');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="loginBtn">
          Login
        </button>
        <div className="form-links">
          <Link to="/register" className="link">Not Registered? Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
