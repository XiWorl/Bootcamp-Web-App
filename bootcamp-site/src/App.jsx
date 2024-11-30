import { useState } from 'react'
import './App.css'
import logo from './assets/App-Dev-Logo.png'
import LoginSignUp from './Login'

function App() {

  return (
    <>
      <div className='title'>
        <img id='logo' src= {logo} alt="App Dev Logo" />
        <h1> App Dev Bootcamp </h1>
      </div>
      <LoginSignUp />

    </>
  )
}

export default App
