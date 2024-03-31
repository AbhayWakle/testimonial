import React from 'react'
import Testimonials from './components/Testimonials'
import reviews from './data'

const App = () => {
  return (
    <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200'>

      <div className='text-center'>

        <h1 className='text-4xl font-bold'>Our Testimonials</h1>

        <div className="h-[4px] w-1/10 mt-1 bg-violet-500 mx-auto"></div>

      </div>

      <Testimonials reviews={reviews} />


    </div>
  )
}

export default App
