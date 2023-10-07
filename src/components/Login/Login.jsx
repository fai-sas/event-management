import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const Login = () => {
  const {
    signInUserWithEmail,
    signInWithGoogle,
    showPassword,
    handlePassword,
  } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email, password)

    signInUserWithEmail(email, password)
      .then((result) => {
        toast.success('Successfully Logged In')
        console.log(result.user)
        e.target.reset()
        navigate('/')
      })
      .catch((error) => {
        toast.error('Invalid Login Details')
        console.error(error)
      })
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success('Successfully Logged In')
        console.log(result.user)
        navigate('/')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className='min-h-screen hero bg-base-200'>
      <div className='flex-col hero-content'>
        <div className='text-center '>
          <h1 className='text-5xl font-bold'>Login now!</h1>
        </div>
        <div className='flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100'>
          <div className='card-body'>
            <form onSubmit={handleLogin}>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  name='email'
                  placeholder='email'
                  required
                  className='input input-bordered'
                />
              </div>
              <div className='relative form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  required
                  placeholder='password'
                  className='input input-bordered'
                />
                <span
                  className='absolute bottom-12 right-4'
                  onClick={handlePassword}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
                <label className='label'>
                  <a href='#' className='label-text-alt link link-hover'>
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className='mt-6 form-control'>
                <button className='btn btn-primary'>Login</button>
              </div>
            </form>
            <p>
              {' '}
              New to this site? Please{' '}
              <Link to='/register'>
                <button className='btn btn-link'>Register</button>
              </Link>{' '}
            </p>
            <p>
              <button onClick={handleGoogleSignIn} className='btn btn-ghost'>
                Google
              </button>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
export default Login
