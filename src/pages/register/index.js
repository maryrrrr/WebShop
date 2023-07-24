import React from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div className='container mx-auto mt-8' style={{ maxWidth:"320px" }}>
      <div className='text-2xl text-center font-bold'>Welcome to  WebShop</div>
      <div className='border border-2 border-black p-2 my-2 rounded'>
        <label className='font-bold'>UserName: </label>
        <input placeholder='UserName' className='w-full border border-black border-2 rounded p-1 my-2'/>
        <label className='font-bold'>Password: </label>
        <input placeholder='At Least 6 Character' className='w-full border border-black border-2 rounded p-1 my-2'/>
        <label className='font-bold'>Email: </label>
        <input placeholder='Email' className='w-full border border-black border-2 rounded p-1 my-2'/>
      </div>
      <div>
        <button className='ml-20 rounded bg-zinc-950 text-white p-1 border border-1 border-black'>SignUp</button>
        <button className='ml-2 rounded bg-zinc-950 text-white p-1 border border-1 border-black'>Login</button>
        </div>
        <div className='flex'>
          <p className='font-bold my-2 text-cyan-900'>I have an account! </p>
          <Link to='/register' className='text-cyan-900 my-2 mx-4 font-bold underline'>SignIn</Link>
      </div>
    </div>
  )
}

export default Register;
