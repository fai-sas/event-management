import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Register = () => {
  const { createUserWithEmail } = useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(name, email, password)

    createUserWithEmail(email, password)
      .then((result) => {
        toast.success('Successfully Registered')
        console.log(result.user)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className='min-h-screen hero bg-base-200'>
      <div className='flex-col hero-content'>
        <div className='text-center '>
          <h1 className='text-5xl font-bold'>Register now!</h1>
        </div>
        <div className='flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100'>
          <div className='card-body'>
            <form onSubmit={handleRegister}>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Name</span>
                </label>
                <input
                  type='text'
                  name='name'
                  placeholder='Your Name'
                  required
                  className='input input-bordered'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  required
                  className='input input-bordered'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  name='password'
                  required
                  placeholder='Password'
                  className='input input-bordered'
                />
                <label className='label'>
                  <a href='#' className='label-text-alt link link-hover'>
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className='mt-6 form-control'>
                <button className='btn btn-primary'>Register</button>
              </div>
            </form>
            <p>
              {' '}
              Already have account? Please{' '}
              <Link to='/login'>
                <button className='btn btn-link'>Login</button>
              </Link>{' '}
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Register
