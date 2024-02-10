"use client"

import React, { useState } from 'react'

const Testdva = () => {
  const [sec, setSec] = useState(4)

  console.log('renderovao TEST2')

  return (
    <div>
      <h2>Dva</h2>
      <button onClick={() => setSec(sec + 2)}>ff</button>
      {sec}
    </div>
  )
}

export default Testdva