import React, { Suspense } from 'react'
import TicketDetails from '../TicketDetails'
import { Ticket } from '../types'

export const dynamicParams = true

export async function generateStaticParams () {
  
  const res = await fetch('http://localhost:4000/tickets')
  
  const tickets: Ticket[] = await res.json()
  
  return tickets.map((ticket) => ({
    id: ticket.id
  }))
  
} 

interface Props {
  params: {
    id: string
  }
}

const page = ({params}: Props) => {
  return (
    <div>
      <h2>Ticket details</h2>
      <Suspense fallback={<div>Wait a little bit ffs its loading...</div>}>
        <TicketDetails id={params.id} />
      </Suspense>
    </div>
  )
}

export default page