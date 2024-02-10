import React from 'react'
import { notFound } from 'next/navigation'
import { Ticket } from './types'

const getTicket = async (id: string): Promise<Ticket> => {
  await new Promise<void>(resolve => setTimeout(resolve, 3000))
  
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 30
    }
  })

  if (!res.ok) {
    notFound()
  }

  return res.json()
}

const TicketDetails = async ({id}: {id: string}) => {
  const data = await getTicket(id)

  console.log(data, '_____')

  return (
    <div>
      <div>
        Page id {id}
      </div>
      <div>
        {data.body}
      </div>
    </div>
  )
}

export default TicketDetails