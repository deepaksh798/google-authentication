import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const navigate = useNavigate();
  return (
    <div>
    <h1>404 Page Not Found</h1>
    <button onClick={()=>navigate('/login')}>Go to Login</button>
    </div>
    
  )
}

export default PageNotFound