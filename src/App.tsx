import React, { useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Register from './Component/Register/Register'
import {  Route, Routes } from 'react-router-dom'
import Login from './Component/login/Login'
import Aftermail from './Component/Afteremail/Aftermail'
import Home from './Component/Home/Home'
import {useNavigate} from 'react-router-dom';
function App() {
  // const [count, setCount] = useState(0)
  const navigate = useNavigate();
  useEffect(()=>{
   if(localStorage.getItem('token') ===  null){
    navigate('/')
   }
   if(localStorage.getItem('token') !=='' && localStorage.getItem('token') !==  null){
    navigate('/home')
   }
  },[])
  return (
    <React.Fragment>
<Routes>
<Route  path='' element={<Login />} />
<Route path="login" element={<Login />} />
<Route path="Register" element={<Register ></Register>} />
<Route path="Aftermail" element = {<Aftermail />} />
<Route path="Home" element = {<Home />} />
</Routes>
  {/* <Aftermail /> */}
    </React.Fragment>
  )
}

export default App
