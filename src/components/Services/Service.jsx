/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './Service.css'

const Service = ({ card }) => {
  const { id, name, description, image, buttonLabel, price } = card

  return (
    <>
      <div className='single-service'>
        <div className='p-2 text-center border-2 shadow-xl card w-80 bg-base-100'>
          <figure>
            <img src={image} alt='Service Img' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>{name}</h2>
            <p className='text-lg font-semibold price text-primary-color'>
              Price: $ {price}
            </p>
            <p>{description}</p>
            <div className='flex justify-center mt-6 card-actions'>
              <Link to={`/services/${id}`}>
                <button className='bg-white btn btn-primary text-primary-color border-primary-color hover:bg-primary-color hover:text-white hover:border-transparent'>
                  {buttonLabel}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service
