import React from 'react';

const Nav = () => {
  return (
    <div>
      <nav className='flex border border-2 rounded border-neutral-950 p-2 m-4'>
          <ul className='flex flex-1'>
            <li><a className='p-2 hover:bg-black hover:text-white hover:rounded' href='/'>Home</a></li>
            <li><a className='p-2 hover:bg-black hover:text-white hover:rounded' href='/'>Products</a></li>
            <li><a className='p-2 hover:bg-black hover:text-white hover:rounded' href='/'>ContactUs</a></li>
          </ul>
          <div>
            <a className='p-2 hover:bg-black hover:text-white rounded' herf='/profile'>Profile</a>
          </div>
        </nav>
    </div>
  )
}

export default Nav
