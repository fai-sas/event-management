import { useState, useEffect } from 'react'
import Service from './Service'
import SectionHeader from '../SectionHeader/SectionHeader'

import './Services.css'

const Services = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch('/events.json')
      .then((response) => response.json())
      .then((data) => setCards(data))
  }, [])

  return (
    <>
      <div className='services-section'>
        <SectionHeader
          title={'Our Service Segments'}
          subtitle={'Service'}
          description={
            'We pride ourselves on innovation, creativity, and professionalism. Our mission is to provide tailored event solutions that align with your goals and objectives. From cutting-edge technology to top-notch speakers, we bring excellence to every aspect of your corporate event.'
          }
          center={true}
        ></SectionHeader>

        <div className='mb-4 services-container'>
          {cards.map((card) => {
            return <Service key={card.id} card={card}></Service>
          })}
        </div>
      </div>
    </>
  )
}
export default Services
