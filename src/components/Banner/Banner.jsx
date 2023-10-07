const Banner = () => {
  return (
    <div className='w-full carousel'>
      <div id='slide1' className='relative w-full carousel-item'>
        <img
          src='https://images.pexels.com/photos/6405771/pexels-photo-6405771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          className='w-full'
        />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide4' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide2' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide2' className='relative w-full carousel-item'>
        <img
          src='https://images.pexels.com/photos/6405783/pexels-photo-6405783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          className='w-full'
        />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide1' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide3' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide3' className='relative w-full carousel-item'>
        <img
          src='https://images.pexels.com/photos/7648237/pexels-photo-7648237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          className='w-full'
        />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide2' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide4' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide4' className='relative w-full carousel-item'>
        <img
          src='https://images.pexels.com/photos/6519190/pexels-photo-6519190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          className='w-full'
        />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide3' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide1' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
    </div>
  )
}

export default Banner
