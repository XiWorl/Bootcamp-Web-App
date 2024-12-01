import { useState } from 'react'
import './App.css'
import logo from './assets/App-Dev-Logo.png'
import LoginSignUp from './Login'
import AdminLayout from './pages/AdminLayout'
import {Link} from "react-router-dom"
import RoutePaths from './RouteManager'

function App() {

  return (
    <>
      <div className='title'>
        <img id='logo' src= {logo} alt="App Dev Logo" />
        <h1> App Dev Bootcamp </h1>
      </div>
      <AdminLayout/>
    </>
  )
}

export default App
