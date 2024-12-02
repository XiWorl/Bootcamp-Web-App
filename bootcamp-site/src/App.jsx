import { useState } from 'react'
import './App.css'
import logo from './assets/App-Dev-Logo.png'
import LoginSignUp from './Login'
import AdminLayout from './AdminLayout'
import {Link} from "react-router-dom"
import RoutePaths from './RouteManager'
import AdminHomework from './AdminHomeworks'
import MyCard from './MyCard'

function App() {

  return (
    <>
      <RoutePaths/>
    </>
  )
}

export default App
