import { Link } from 'react-router-dom'

/* eslint-disable react/prop-types */
const Service = ({ card }) => {
  const { id, name, description, image, buttonLabel } = card

  return (
    <div className='shadow-xl card card-compact bg-base-100'>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p>{description}</p>
        <div className='justify-end card-actions'>
          <Link to={`/services/${id}`}>
            {' '}
            <button className='btn btn-primary'>{buttonLabel}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Service
