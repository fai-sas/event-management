import { useState, useEffect } from 'react'
import Service from './Service'

const Services = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch('/events.json')
      .then((response) => response.json())
      .then((data) => setCards(data))
  }, [])

  return (
    <div className='container grid gap-8 p-8 mx-auto lg:py-12 md:grid-cols-2 lg:grid-cols-3'>
      {cards.map((card) => {
        return <Service key={card.id} card={card}></Service>
      })}
    </div>
  )
}
export default Services
