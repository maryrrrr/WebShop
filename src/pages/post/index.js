import React from 'react';
import Layout from '../../components/Layout';
import Comment from './components/Comment';

const Post = () => {
  return (
    <Layout>
      <div className='border border-black border-2 rounded m-4 p-2'>
        <div>Image</div>
        <h1 className='text-2xl font-bold'>Post Title</h1>
        <div>Post Content</div>
        <div>Like</div>
      </div>
      <div className='border border-2 border-black rounded m-4 p-2'>
        <div className='text-2xl font-bold'>Post Comments</div>
        <div className='flex border border-2 border-black rounded p-2'>
          <input className='flex-1 outline-none' placeholder='Type your comments...' />
          <button className='p-1 hover:bg-black hover:text-white rounded'>Send</button>
        </div>
       <Comment />
       <Comment />
       <Comment />
       </div>
    </Layout>
  )
}

export default Post;
