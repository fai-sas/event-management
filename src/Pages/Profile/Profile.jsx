import { AuthContext } from '../../providers/AuthProvider'
import { useContext } from 'react'

const Profile = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className='container p-8 mx-auto'>
      <h1 className='py-8 text-4xl font-bold text-center'>Your Profile</h1>

      <article className='space-y-6 text-2xl font-bold'>
        <h2>Your Name : {user?.displayName}</h2>
        <h2>Your Email : {user?.email}</h2>
        <h2>
          Your Photo :{' '}
          <span>
            <img
              className='inline-block object-cover w-10 rounded-full'
              src={user?.photoURL}
              alt={user?.displayName}
            />
          </span>{' '}
        </h2>

        <h2>Email Verified? : {user?.emailVerified} No </h2>
        <h2>Last LoggedIn : {user?.metadata?.lastSignInTime}</h2>
      </article>
    </div>
  )
}
export default Profile
