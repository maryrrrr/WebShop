import React from 'react'
import {Link} from 'react-router-dom';

const PostCard = ({postData}) => {
  return (
    <div className='flex mx-5 border border-black rounded my-4'>
        <div className='p-2'>
            <Link to='/'>
              <img className='object-scale-down h-48 w-70' src={postData.image} alt="" />
            </Link>
        </div>
        <div className='flex-1 m-2'>
            <div className='text-2xl font-bold'>
                <Link to='/post/1'>{postData.title}</Link>
            </div>
            <div className='m-2 text-justify'>{`${postData.content.substr(0,90)}...`}</div>
            <div className='flex'>
                <div className='my-1 p-1 hover:bg-black hover:text-white rounded'>Like</div>
                <div className='my-1 p-1 hover:bg-black hover:text-white rounded'>Comment</div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
