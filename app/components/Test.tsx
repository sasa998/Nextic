"use client"

import React, { useState } from 'react'
import Testdva from './Testdva'

const Test = () => {
  const [first, setFirst] = useState('')

  console.log('renderovao TEST1')

  return (
    <div>
      <h2>Test</h2>
      <button onClick={() => setFirst(first + '1')}>f</button>
      {first}
      <Testdva />
    </div>
  )
}

export default Test