import { useLoaderData, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SingleEvent from '../../components/SingleEvent/SingleEvent'

const ServicePage = () => {
  const [singleEvent, setSingleEvent] = useState([])

  const data = useLoaderData()

  const { id } = useParams()

  useEffect(() => {
    const findEvent = data?.find((event) => event.id === id)
    setSingleEvent(findEvent)
  }, [id, data])

  return (
    <>
      <article className='container py-4 mx-auto text-4xl font-bold text-center underline'>
        <h1>Our Events</h1>
      </article>

      <div className='container flex items-center justify-center gap-4 mx-auto'>
        <SingleEvent singleEvent={singleEvent} />
      </div>
    </>
  )
}
export default ServicePage
