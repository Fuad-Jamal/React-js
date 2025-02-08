import React from 'react'

const Login = () => {
  return (
    <div>
        <input onChange={(e)=>setUsername(e.target.value)} />
    </div>
  )
}

export default Login;
