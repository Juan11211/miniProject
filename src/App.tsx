import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './routes/index'
import LandingPage from './components/LandingPage/LandingPage.Component'


function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          {routes}
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
