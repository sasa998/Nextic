import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
    <Link href='/'>Home</Link>
    <Link href='/tickets'>Tickets</Link>
  </nav>
  )
}

export default Navbar