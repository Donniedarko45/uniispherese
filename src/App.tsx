import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Register from './Component/Register/Register'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './Component/login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
<Routes>
<Route  path='' element={<Navigate to="/login" replace />} />
<Route path="login" element={<Login />} />
<Route path="Register" element={<Register ></Register>} />

</Routes>
  
    </React.Fragment>
  )
}

export default App
