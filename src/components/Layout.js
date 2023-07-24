import React from 'react';
import Nav from '../components/Nav';
const Layout = ({children}) => {
  return (
    <div className='container mx-auto' style={{ maxWidth:"768px" }}>
      <div className='text-4xl text-neutral-950 text-center my-4'>My Blog Shop</div>
        <Nav />
          <div>{children}</div>
    </div>
  )
}

export default Layout;
