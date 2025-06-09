import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useRouter } from 'next/router'

export default function Home() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Kolla din e-post för en inloggningslänk!')
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Logga in</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Din e-post"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Logga in</button>
      </form>
      <p>{message}</p>
    </div>
  )
}
