
import './App.css'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar />
      <center>I am APP jsx</center>
     <Outlet />
     
    </>
  )
}

export default App
