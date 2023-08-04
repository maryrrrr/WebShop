import React from 'react'

const Comment = ({commentData}) => {
  return (
    <div className='border border-2 border-black rounded my-2 p-2'>
    <div className='text-2xl font-bold'>User</div>
    <div>{commentData.comment}</div>
  </div>
  )
}

export default Comment
