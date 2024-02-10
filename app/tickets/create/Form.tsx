"use client"

import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'
import styles from "./createTicket.module.css"

const CreateForm = () => {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [priority, setPriority] = useState('low')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const ticket = {
      title,
      body,
      priority,
      user_email: 'sasa@test.com'
    }

    const res = await fetch('http://localhost:4000/tickets', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(ticket)
    })

    if (res.status === 201) {
      router.push('/tickets')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.field}>
        <span>Title:</span>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className={styles.field}>
        <span>Body:</span>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)} />
      </div>
      <div className={styles.field}>
        <span>Priority:</span>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low priority</option>
          <option value="medium">Medium priority</option>
          <option value="high">High priority</option>
        </select>
      </div>
      <button disabled={isLoading}>
        {isLoading ? <span>Adding Ticket...</span> : <span>Add Ticket</span>}
      </button>
    </form>
  )
}

export default CreateForm