import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(_prev => e.target.value)
  }
  
  const handlePasswordChange = (e) => {
    setPassword(_prev => e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('email: ', email);
    console.log('password: ', password);

    navigate('/');
  }

  return (
    <main className='w-screen h-screen flex flex-col justify-center items-center font-Poppins'>
      <h1 className='w-full text-center font-normal text-6xl'>Login</h1>
      <form onSubmit={handleSubmit} className='mt-20 w-1/4'>

        <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} placeholder='Email'
        className='block w-full mt-4 border-2 py-2 pl-4 border-opacity-70 border-[#686868] rounded-md'/>

        <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} placeholder='Password'
        className='block w-full mt-4 border-2 py-2 pl-4 border-opacity-70 border-[#686868] rounded-md'/>

        <div className='mt-10 flex justify-between items-center'>
          <Link to="/auth/forgot-password" className='text-initio-green-secondary underline underline-offset-4'>Forgot your password?</Link>
          {/* <button type="submit">Log in</button> */}
          <button type="submit" className="text-initio-white-secondary font-medium text-lg bg-initio-green-secondary hover:bg-initio-green-secondary rounded-lg px-4 py-2 focus:outline-none">
            Log in
        </button>
        </div>
      </form>
    </main>
  )
}

export default Login