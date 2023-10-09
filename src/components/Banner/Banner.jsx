import './Banner.css'

const Banner = () => {
  return (
    <section className=''>
      <div
        data-aos='fade-up-right'
        data-aos-easing='ease-out-cubic'
        data-aos-duration='2000'
        className=' banner-container'
      >
        <div className='banner-content'>
          <h1 className='mb-8 text-3xl lg:text-8xl'>
            Your Dream Event <br /> Our Expertise
          </h1>
          <p className='mb-8 text-3xl'>Turning Visions into Reality</p>

          <div className='action-btns'>
            <button className='my-4 mr-6 text-white shadow-md btn btn-1'>
              Discover More
            </button>
            <button className='btn btn-outline'>Booking</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
