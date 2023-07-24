import React from 'react'

const Profile = () => {
  return (
    <div className='container mx-auto mt-20' style={{ maxWidth:"320px" }}>
      <div className='border border-2 border-black p-2 my-2 rounded'>
      <label className='font-bold'>Your Display Name: </label>
        <input placeholder='UserName' className='w-full border border-black border-2 rounded p-1 my-2'/>
      </div>
      <div>
        <button className='w-full rounded bg-zinc-950 text-white p-1 border border-1 border-black'>Update My Name</button>
      </div>
    </div>
  )
}

export default Profile
