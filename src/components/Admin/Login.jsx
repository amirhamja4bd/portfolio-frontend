import React, { useState } from 'react';
import './login.css';
import axiosInstance from "../../helper/axiosInstance";
import { message } from 'antd';
import { setToken } from '../../helper/FormHHelper';
import { useNavigate } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';

const Login = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!userName || !password) {
      message.error('Please enter username and password');
      return;
    }

    try {
      setLoading(true);
      const response = await axiosInstance.post('/login', { userName, password });

      // Handle the response
      if (response.status === 200) {
        setToken(response.data.token);
        message.success('Login Success');
        navigate('/dashboard/dashboard')
        setUserName('');
        setPassword('');
      } else {
        message.error('Invalid Email or Password');
      }
    } catch (error) {
      console.error("Error:", error);
      message.error(error?.response?.data?.error || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '' }}>
      <div className='contact-wrapper col-md-4 mx-auto mt-5'>
        <h1>Login</h1>
        <p className="mb-4 fs-6">
          You don't have an account? <a href="/">Register</a>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name='user_name'
              className="form-control"
              placeholder="Username"
              autoComplete="off"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name='password'
              className="form-control"
              placeholder="Your password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="main-btn" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
