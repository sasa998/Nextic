import React from 'react'
import { Ticket } from './types'

const getTickets = async () => {
  await new Promise<void>(resolve => setTimeout(resolve, 3000))

  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 0
    }
  })

  return res.json()
}

const TicketList = async () => {
  const tickets = await getTickets()

  return (
    <div>
      {tickets.map((ticket: Ticket) => (
        <div style={{margin: '25px 0'}} key={ticket.id}>{ticket.body.slice(0, 50)}...</div>
      ))}
    </div>
  )
}

export default TicketList