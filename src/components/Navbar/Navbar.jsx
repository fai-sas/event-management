import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'
import { useContext } from 'react'
import logo from '../../assets/favicon.png'
import menuRight from '../../assets/menu-right.svg'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Navbar.css'
import ActiveLink from '../ActiveLink/ActiveLink'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success('user logged out successfully'))
      .catch((error) => console.error(error))
  }

  const navLinks = (
    <>
      <li className='pr-4 text-lg font-semibold'>
        <ActiveLink to='/'>Home</ActiveLink>
      </li>
      <li className='pr-4 text-lg font-semibold'>
        <ActiveLink to='/about'>About</ActiveLink>
      </li>
      <li className='pr-4 text-lg font-semibold'>
        <ActiveLink to='/services'>Services</ActiveLink>
      </li>
      <li className='pr-4 text-lg font-semibold'>
        <ActiveLink to='/blog'>Blog</ActiveLink>
      </li>

      {user && (
        <>
          <li className='pr-4 text-lg font-semibold'>
            <ActiveLink to='/profile'>Profile</ActiveLink>
          </li>
          <li className='px-4 text-lg font-semibold'>
            <Link to='#'>{user?.displayName}</Link>
          </li>
        </>
      )}
    </>
  )

  return (
    <div className='container relative z-10 justify-between p-8 mx-auto shadow-lg lg:pt-12 navbar'>
      <div className='navbar-start'>
        <Link to='/' className='text-xl normal-case '>
          <div className='flex items-center nav-logo'>
            <img src={logo} alt='Logo' className='w-14' />
            <h1>
              Shadow<span className='text-primary-color'>Studio</span>
            </h1>
          </div>
        </Link>
        {/* <div className='dropdown'>
          <label tabIndex={0} className='bg-white btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul tabIndex={0} className='menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box bg-white'>
            {navLinks}
            {
              user ? <li onClick={handleLogOut} className='px-4 text-lg font-bold cursor-pointer'><button className="w-full btn btn-outline btn-xs">Logout</button></li> : <li className='px-4 text-lg font-bold'>
                <NavLink to='/login'><button className="w-full btn btn-outline btn-xs">Login</button></NavLink>
              </li>
            }
          </ul>
        </div> */}
      </div>
      <div className='hidden navbar-end lg:flex '>
        <ul className='items-center px-1 menu-horizontal'>
          {navLinks}

          {user ? (
            <li
              onClick={handleLogOut}
              className='px-4 text-lg font-bold cursor-pointer'
            >
              <button className='btn btn-outline btn-info'>Logout</button>
            </li>
          ) : (
            <li className='px-4 text-lg font-bold'>
              <NavLink to='/login'>
                <button className='btn btn-outline btn-info'>Login</button>
              </NavLink>
            </li>
          )}
        </ul>
        <div className='w-10 '>
          <img className='rounded-full' src={user?.photoURL} />
        </div>
      </div>
      <ToastContainer />
      <div className='dropdown'>
        <label tabIndex={0} className='bg-white btn btn-ghost lg:hidden'>
          {/* <svg
            xmlns='../../assets/burger-menu-right-svgrepo-com.svg'
            className='w-5 h-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h8m-8 6h16'
            />
          </svg> */}
          <img src={menuRight} className='w-8' />
        </label>
        <ul
          tabIndex={0}
          className='menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box bg-white'
        >
          {navLinks}
          {user ? (
            <>
              <li className='px-4 text-lg font-bold'>
                <Link to='#'>{user?.displayName}</Link>
              </li>
              <li
                onClick={handleLogOut}
                className='px-4 text-lg font-bold cursor-pointer'
              >
                <button className='w-full btn btn-outline btn-xs'>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li className='px-4 text-lg font-bold'>
              <NavLink to='/login'>
                <button className='w-full btn btn-outline btn-xs'>Login</button>
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
export default Navbar
