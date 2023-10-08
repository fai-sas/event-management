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
      <div className="services-section">
        <SectionHeader
          title={"Our Service Segments"}
          subtitle={"Service"}
          description={"the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."}
          center={true}
        ></SectionHeader>

        <div className='services-container mb-4'>
          {cards.map((card) => {
            return <Service key={card.id} card={card}></Service>
          })}
        </div>
      </div>
    </>
  )
}
export default Services
