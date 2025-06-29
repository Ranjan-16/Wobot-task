import { useState } from 'react'
import './App.css'
import CameraDashboard from './components/CameraDashboard'
import Logo from './assets/Brand Logo.svg'

function App() {

  return (
    <div className='bg-[#F9F9F9] '>
      <div className="p-4 max-w-[1280px] mx-auto my-0 w-full">
        <div className='flex justify-center mb-5'>
          <img src={Logo} alt="React logo" />
        </div>
        <CameraDashboard />
      </div>
    </div>
  )
}

export default App
