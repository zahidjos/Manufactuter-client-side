import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.config';
import logo from '../../image/logo.png'

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  };
  
    return (
        <div className="container">

       
            <div  className="navbar bg-base-100">
              <div className='w-11/12 mx-auto'>
  <div  className="navbar-start">
    <div  className="dropdown">
      <label tabindex="0"  className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0"  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>Blog</Link></li>
        
        {user && <li><Link to='/dashboard'>Dashboard</Link></li> }
        <li><Link to='/portfolio'>My Portfolio</Link></li>
      {user?<li><button onClick={logout}className="btn btn-info">Log Out</button></li>:<li><Link to='/logIn'>Log In</Link></li>}
        
      </ul>
    </div>
    <a  className="btn btn-ghost normal-case text-xl"><img className='w-20' src={logo} alt="" /></a>
  </div>
  <div  className="navbar-end hidden lg:flex">
    <ul  className="menu menu-horizontal p-0">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      
      
      {user && <li><Link to='/dashboard'>Dashboard</Link></li> }
      <li><Link to='/portfolio'>My Portfolio</Link></li>
      {user?<li><button onClick={logout}className="btn btn-info">Log Out</button></li>:<li><Link to='/logIn'>Log In</Link></li>}
      
    </ul>
  </div>
  </div>
</div>
</div>
       
    );
};

export default Navbar;