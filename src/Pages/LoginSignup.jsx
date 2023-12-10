import React from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" name="" id="" placeholder='Your Name' />
          <input type="email" name="" id="" placeholder='Your Email' />
          <input type="password" name="" id="" placeholder='Your Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>BY continueing, I agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
