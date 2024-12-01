import { useState } from 'react'
import './App.css'
import logo from './assets/App-Dev-Logo.png'
import LoginSignUp from './Login'
import AdminLayout from './AdminLayout'
import {Link} from "react-router-dom"
import RoutePaths from './RouteManager'
import AdminHomework from './AdminHomeworks'

function App() {

  return (
    <>
      <AdminLayout/>
    </>
  )
}

export default App
