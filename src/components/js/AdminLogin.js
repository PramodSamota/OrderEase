import React, {useState} from 'react'
import '../css/adminlogin.css'

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Logging in with:', { username, password });
      setUsername('');
      setPassword('');
      // Here you can add logic to authenticate the user
    };

    const handleForgotPassword = () => {
    // Logic to handle forgot password link, e.g., show a modal or navigate to a forgot password page
    console.log('Forgot Password clicked');
  };
  
    return (
      <div className='adminLoginContainer'>
        <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className='adminLoginButton'>Login</button>
        <div className="forgot-password">
        <span onClick={handleForgotPassword}>Forgot Password?</span>
      </div>
      </form>
      
      </div>
    );
  };
  
export default AdminLogin