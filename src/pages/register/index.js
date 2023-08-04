import { useState, useEffect } from 'react';
import { supabase } from '../../data/supabase/client';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userName, setUserName] = useState();
  const [isSignIn, setIsSignIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const signInUsser= async() => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    setIsLoading(false);
    if(!error){
      navigate('/');
    }
  }
  const signUpUser= async() => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    setIsLoading(false);
    if(!errorMessage){
      setErrorMessage("We Sent You an Email! Please Check it...");
    }
  }
  const submitForm= (e)=> {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    if(isSignIn){
      signInUsser();
    }
    else{
      signUpUser();
    }
    }
    useEffect(() => {
      const getSession= async() =>{
        const { data, error } = await supabase.auth.getSession();
        if(data.session){
          navigate('/profile');
        }
      };
      getSession();
    }, [navigate])

      
  
 
  return (
    <div className='container mx-auto mt-8' style={{ maxWidth:"320px" }}>
      <div className='text-2xl text-center font-bold'>Welcome to  WebShop</div>
      { errorMessage.length>0 && <div className='border border-2 font-bold'>{errorMessage}</div> }
        <form onSubmit={submitForm}>
          <div className='border border-2 border-black p-2 my-2 rounded'>
          <label className='font-bold'>UserName: </label>
          <input 
            placeholder='UserName' 
            type="text"
            className='w-full border border-black border-2 rounded p-1 my-2'
            onChange={(e)=>setUserName(e.target.value)}
            value={userName}
            />
          <label className='font-bold'>Password: </label>
          <input 
            placeholder='At Least 6 Character' 
            type="password"
            className='w-full border border-black border-2 rounded p-1 my-2'
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            />
          <label className='font-bold'>Email: </label>
          <input 
            placeholder='Email' 
            type="email"
            className='w-full border border-black border-2 rounded p-1 my-2'
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            />
        </div>
          <button 
            type='submit' 
            disabled={isLoading}
            className='w-90 ml-20 rounded bg-zinc-950 text-white p-1 border border-1 border-black'>
            { !isLoading && isSignIn ? "Sign In" : "Sign Up" }
            { isLoading && " Loading..."}
            </button>
          <button 
          onClick={ ()=> setIsSignIn((prev)=> !prev) }
            className='p-1 ml-2 rounded bg-zinc-950 text-white border border-1 border-black'>
           { !isSignIn ? "Sign In" : "Sign Up" }
          </button>
        </form>
    </div>
  )
}

export default Register;
