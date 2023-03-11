import React from 'react'
import Header from './components/Header/Header'
import LeftPort from './components/left/LeftPort'
import Navbar from './components/Navbar/Navbar'
import RightPort from './components/right/RightPort'

const App = () => {
  return (
    <>
   <Header />
   <div className="w-full min-h-[90vh] grid grid-cols-12"> 
   <Navbar />
   <div className='grid grid-cols-1 xl:grid-cols-5 w-full col-span-10'>
    {/* left */}
     <LeftPort />
     <RightPort />
    {/* right */}
   </div>
   </div>

    </>
  )
}

export default App
