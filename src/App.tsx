import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as React from 'react'
import {BrowserRouter, Routes } from 'react-router-dom';
import { routes } from './routes/index'


function App() {


  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          {routes}
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
