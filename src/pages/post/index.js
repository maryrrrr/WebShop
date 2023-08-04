import React from 'react';
import Layout from '../../components/Layout';
import Comment from './components/Comment';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {supabase} from '../../data/supabase/client';

const Post = () => {
  const {id}= useParams();
  const [result, setResult] = useState();
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([]);
  const [userId, setUserId] =useState();
  const [isLiked, setIsLiked] = useState(false);

  const getPost= async(id)=> {
    fetch( `${process.env.REACT_APP_SUPABASE_PROJECT_URL}/rest/v1/posts?id=eq.${id}&select=*`,
    {
    method: "GET",
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_ANON_KEY,
      Authorization: process.env.REACT_APP_SUPABASE_ANON_KEY,
    }
    })
    .then((response)=> response.json())
    .then((response)=> setResult(response[0])
    )
    getPostComments(id);
  }
   const getPostComments= async(id)=> {
    const { data: comments, error } = await supabase
    .from('post_comments')
    .select('*')
    .neq("postId",id)
    setComments(comments);
    };
   
    useEffect(() => {
      const getUsersPostLike= async() => {
        const {data} = await supabase
        .from("post_likes")
        .select("*")
        .eq("userId", userId)
        .eq("postId", id)

        if(data.length>0){
          setIsLiked(true);
        }
      }
      getUsersPostLike();
    }, [id, userId])

  useEffect(() => {
    getPost(id);
  }, [id]);

   useEffect(()=> {
    const getSession= async() =>{
      const { data } = await supabase.auth.getSession();
      setUserId(data.session.user.id);
    }
    getSession();
   },[]);

  const sendComment= async()=> { 
    const { data, error } = await supabase
    .from('post_comments')
    .insert([{ postId:id, comment, userId}])
    getPostComments(id);
  }
  const handleLikeClicked= async() =>{
    if(!isLiked){
      const { data, error } = await supabase
      .from("post-likes")
      .insert([{ postId:id, userId }])
    }
  }
  
  return (
    <Layout>
      <div className='border border-black border-2 rounded m-4 p-2'>
        { !result && <div>Loading...</div> }
        { result && (
          <>
            <div>
              <img 
                className='ml-8'
                src={result.image} 
                alt={result.title} 
              />
            </div>
            <h1 className='text-2xl font-bold'>{result.title}</h1>
            <div>{result.content}</div>
            <div className={`border border-1 p-2 ${isLiked && 'bg-black text-white'}`}
                  onClick={()=> handleLikeClicked()}
                  >
                    Like
                  </div>
          </>
        )}
          </div>
           <div className='border border-2 border-black rounded m-4 p-2'>
        <div className='text-2xl font-bold'>Post Comments</div>
        <div className='flex border border-2 border-black rounded p-2'>
          <input 
            className='flex-1 outline-none' 
            placeholder='Type your comments...' 
            value={comment}
            onChange={(e)=>setComment(e.target.value)}
            />
          <button 
            className='p-1 hover:bg-black hover:text-white rounded'
            onClick={()=> sendComment()}>Send</button>
        </div>
        <div>
            {comments.map((comment)=>(
              <Comment key={comment.id} commentData={comment}/>
            ))}
        </div>
       </div>
    </Layout>
  )
 }

export default Post;
