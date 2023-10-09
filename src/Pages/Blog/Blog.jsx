const Blog = () => {
  return (
    <>
      <h1 className='p-8 text-4xl font-bold text-center'>
        Welcome to Our Blogs
      </h1>
      <section className='container gap-6 p-8 mx-auto lg:grid lg:grid-cols-3'>
        {/* card 1 */}
        <div className='card glass'>
          <figure>
            <img
              className='h-full'
              src='https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Corporate Leadership Summit'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Corporate Leadership Summit</h2>
            <p className='leading-relaxed'>
              In the fast-paced and dynamic world of business, strong leadership
              is the cornerstone of success. It's not just about steering the
              ship; it's about setting the course, inspiring the crew, and
              navigating through turbulent waters with finesse. In this pursuit
              of leadership excellence, the Corporate Leadership Summit emerges
              as a beacon of inspiration and knowledge-sharing.
            </p>
            <p className='leading-relaxed'>
              The Corporate Leadership Summit is not your average business
              event. It's a gathering of visionaries, thought leaders, and
              seasoned executives who understand that leadership is a journey,
              not a destination. This summit aims to unlock the full potential
              of leaders by providing them with the tools, insights, and
              strategies they need to excel in today's ever-evolving corporate
              landscape.
            </p>
          </div>
        </div>
        {/* card 2 */}
        <div className='card glass'>
          <figure>
            <img
              className='h-full'
              src='https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Corporate Leadership Summit'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Global Business Conference</h2>
            <p className='leading-relaxed'>
              In an increasingly interconnected world, businesses are no longer
              confined by geographical boundaries. The global marketplace offers
              a wealth of opportunities and challenges that require a deep
              understanding of international dynamics. The Global Business
              Conference stands as a testament to the importance of global
              perspectives in today's corporate landscape.
            </p>
            <p className='leading-relaxed'>
              The Global Business Conference is not your typical business event.
              It's a gathering of minds from diverse backgrounds and corners of
              the globe. Executives, entrepreneurs, and thought leaders converge
              to discuss the intricacies of global business, share insights, and
              explore collaborative opportunities.
            </p>
          </div>
        </div>
        {/* card 3 */}
        <div className='card glass'>
          <figure>
            <img
              className='h-full'
              src='https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Digital Transformation Conference'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Digital Transformation Conference</h2>
            <p className='leading-relaxed'>
              The Digital Transformation Conference is not just an event; it's a
              glimpse into the future. In today's fast-paced world, where
              technology is reshaping industries at an unprecedented rate, this
              conference is a beacon guiding us through the digital revolution.
              Let's dive into the key takeaways from this transformative event.
            </p>
            <p className='leading-relaxed'>
              Digital transformation is no longer a choice; it's a necessity.
              The conference emphasizes that every organization, regardless of
              its size or sector, must embrace digital technologies to remain
              competitive. Whether it's automating processes, leveraging big
              data, or enhancing customer experiences, the digital age offers
              countless opportunities for growth and innovation.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
