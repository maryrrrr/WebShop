import { supabase } from '../../data/supabase/client';
import Layout from '../../components/Layout';
import PostCard from './components/PostCard';
import { useEffect } from 'react';


const Home = () => {
  const getAllPosts= async() => {
    const { data: posts, error } = await supabase .from('posts').select('*')
    console.log(posts,error);
    }
    useEffect(() => {
      getAllPosts();
    }, []);

  return (
    <Layout>
      <PostCard />
      <PostCard />
      <PostCard />
    </Layout>
  )
}

export default Home;
