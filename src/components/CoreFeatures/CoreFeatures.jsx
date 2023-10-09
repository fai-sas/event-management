import React from 'react'
import './CoreFeatures.css'

import team from '../../assets/icons/team.svg'
import time from '../../assets/icons/time.svg'
import support from '../../assets/icons/support.svg'
import SectionHeader from '../SectionHeader/SectionHeader'

const CoreFeatures = () => {
  const coreFeatures = [
    { id: 1, title: 'Expert Team', icon: team },
    { id: 2, title: 'Timely Delivery', icon: time },
    { id: 3, title: '24/7 Support', icon: support },
  ]
  return (
    <div
      data-aos='zoom-in'
      data-aos-easing='ease-out-cubic'
      data-aos-duration='2000'
      className='core-features my-14'
    >
      <SectionHeader
        title={'Why Choose Us'}
        subtitle={'Core Features'}
        description={
          "With a wealth of experience in executing successful conferences and seminars, we've honed our expertise to offer you tailored solutions that align with your event goals. Our commitment to attention to detail ensures that every aspect, from venue selection to logistics, is meticulously planned and executed."
        }
        center={true}
      ></SectionHeader>
      <div className='features-container'>
        {coreFeatures.map((feature) => (
          <div key={feature.id} className='feature'>
            <img src={feature.icon} alt='feature icon' className='mb-5' />
            <h4 className='font-bold'>{feature.title}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CoreFeatures
