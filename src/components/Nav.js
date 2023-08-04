import { useState, useEffect } from "react";
import { supabase } from "../data/supabase/client";

 const Nav = () => {
  const [hasSession, setHasSession] = useState();

  const getSession= async()=> {
    const { data, error } = await supabase.auth.getSession();
    if(data.session){
      setHasSession(data.session);
  }
}
  useEffect(() => {
    getSession();
  }, []);
 
  return (
    <div>
      <nav className='flex border border-2 rounded border-neutral-950 p-2 m-4'>
          <ul className='flex flex-1'>
            <li>
              <a className='p-2 hover:bg-black hover:text-white hover:rounded' href='/'>Home</a>
            </li>
            <li>
              <a className='p-2 hover:bg-black hover:text-white hover:rounded' href='/'>Fun</a>
            </li>
            <li>
              <a className='p-2 hover:bg-black hover:text-white hover:rounded' href='/'>Crime</a>
            </li>
          </ul>
          <div>
            <a className='p-2 hover:bg-black hover:text-white rounded' herf={hasSession? '/profile' : '/register'}>
              {hasSession? "Profile" : "Register"}
            </a>
          </div>
        </nav>
    </div>
  )
  }
export default Nav;
