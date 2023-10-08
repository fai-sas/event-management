/* eslint-disable react/prop-types */
const SingleEvent = ({ singleEvent }) => {
  // const { name, description, image, price } = singleEvent

  return (
    <div className='items-center justify-center px-8 py-8 space-y-4 md:flex '>
      <article className='space-y-4'>
        <h1 className='text-4xl font-bold'>{singleEvent?.name}</h1>
        <p className='text-2xl'>{singleEvent?.description}</p>
        {singleEvent && (
          <button className='text-2xl btn btn-info'>
            {singleEvent?.price}
          </button>
        )}
      </article>
      <article className=''>
        <img
          className='py-4 rounded-lg'
          src={singleEvent?.image}
          alt={singleEvent?.name}
        />
      </article>
    </div>
  )
}
export default SingleEvent
