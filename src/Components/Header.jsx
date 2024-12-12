import { NavLink, useLoaderData } from "react-router-dom";
import logo from '../assets/logo.png';
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { FaUserLarge } from "react-icons/fa6";


const Header = () => {
    const {user,logOut} = useContext(AuthContext)

    const createdBy = user?.email;
    const email = user?.email;
    
   console.log(user)
    const links =
    <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/allVisa'}>All Visas</NavLink></li>
        <li><NavLink to={'/addVisa'}>Add Visa</NavLink></li>
        
        <li><NavLink to={`/myAddedVisa/${createdBy}`}>My Added Visas</NavLink></li>
        <li><NavLink to={`/myApplication/${email}`}>My Visa Application</NavLink></li>


    </>

    return (
      <div className="w-11/12 mx-auto">
          <div className="navbar  text-white mb-14 p-3">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
        {
            links
        }
      </ul>
    </div>
    <img className="rounded-full w-[65px]" src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" menu menu-horizontal  px-1">
      
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end">
  < div className='flex items-center justify-center gap-2'>
            <div>
                {
                    user?.email? <div className='flex flex-col items-center justify-center mr-2 '>
                        <p>{user.displayName}</p>
                        <img className='w-[50px] h-[50px] rounded-full' src={user.photoURL} alt="" />
                    </div>:<FaUserLarge className='text-2xl'></FaUserLarge>
                }
            </div>

            <div>
            {
                user?( <button onClick={logOut} className ='btn btn-neutral'>Log out</button>):  (<NavLink to={'/login'} className='btn btn-neutral'>Log in </NavLink>)
            }
            

            </div>

          
                
               

            </div>
  </div>
</div>
      </div>
    );
};

export default Header;