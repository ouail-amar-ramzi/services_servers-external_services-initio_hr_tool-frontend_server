import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import LeftGlow from '../assets/home/left-glow.svg'
import a from '../assets/logo-green.svg'

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
    <main className='w-screen h-screen relative flex justify-end items-center'>

      <img src={LeftGlow} alt="left glow decoration" className='h-full w-full absolute -left-[20%] scale-150' />
      <img src={a} alt="left glow decoration" className='w-[20%] absolute left-[10%] top-[60%]' />

      
      <div className='w-1/2 z-20 flex flex-col justify-center items-center font-Poppins'>
        <h1 className='w-full text-center font-normal text-6xl'>Login</h1>
        
        <form onSubmit={handleSubmit} className='mt-20 w-1/2'>

          <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} placeholder='Email'
          className='block w-full mt-4 border-2 py-2 pl-4 border-opacity-70 border-[#686868] rounded-md placeholder:text-[#1D1C1C]'/>

          <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} placeholder='Password'
          className='block w-full mt-4 border-2 py-2 pl-4 border-opacity-70 border-[#686868] rounded-md placeholder:text-[#1D1C1C]'/>

          <div className='mt-10 flex justify-center items-center'>
            <button type="submit" className="w-1/4 text-initio-white-secondary font-medium text-lg bg-initio-green-secondary shadow-button hover:bg-initio-green-secondary rounded-lg px-4 py-2 focus:outline-none">
              Log in
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Login