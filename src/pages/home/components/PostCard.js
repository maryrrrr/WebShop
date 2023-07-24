import React from 'react'
import {Link} from 'react-router-dom';

const PostCard = () => {
  return (
    <div className='flex mx-5 border border-black rounded my-4'>
        <div className='p-2 m-2'>
            <Link to='/'>Image</Link>
        </div>
        <div className='flex-1 m-2'>
            <div className='text-2xl'>
                <Link to='/post/1'>Post Title</Link>
            </div>
            <div>Post Description</div>
            <div className='flex'>
                <div className='my-1 p-1 hover:bg-black hover:text-white rounded'>Like</div>
                <div className='my-1 p-1 hover:bg-black hover:text-white rounded'>Comment</div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
