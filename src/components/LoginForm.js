import React, { useState } from 'react'

const LoginForm = ({ startLogin }) => {
    const [ email, setEmail ] = useState('')

    const handleLogin = (event) => {
        event.preventDefault()

    const credentials = {
      email
    }

    startLogin(credentials)
    setEmail('')
  }

  return (
    <form onSubmit={handleLogin} id='login-form'>
        <input 
            type='email'
            placeholder='Email'
            value={email}
            onChange={event => setEmail(event.target.value)}
            id='email'
            required
        />

        <button type='submit' id='login-submit'>LOGIN</button>
    </form>
  )
}

export default LoginForm