import { supabase } from '../../data/supabase/client';
import Layout from '../../components/Layout';
import PostCard from './components/PostCard';
import { useEffect, useState } from 'react';

const Home = () => {
  const [newPosts, setNewPosts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const getSession= async()=> {
    const { data, error } = await supabase.auth.getSession();
  }

  const getAllPosts= async() => {
    const { data: posts, error } = await supabase .from('posts').select('*')
      setNewPosts(posts);
      setErrorMessage(error);
    }
    useEffect(() => {
      getAllPosts();
      getSession();
    }, []);

  return (
    <Layout>
     { !errorMessage && newPosts.length>0 && newPosts.map((item)=>(
      <PostCard key={item.id} postData={item} />
     ))}
    </Layout>
  )
}

export default Home;
