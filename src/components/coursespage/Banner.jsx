import React from 'react'

const Banner = () => {
  return (
    <div className='bg-blue-600 flex flex-col md:flex-row md:justify-around items-center py-14 space-y-4 md:space-y-0'>
        <div className='text-center font-bold '>
            <h1 className='text-5xl text-yellow-400'>1Million+</h1>
            <p className='text-white'>Job Opportunities</p>
        </div>
        <div className='text-center font-bold '>
            <h1 className='text-5xl text-yellow-400'>3.5 - 7LPA</h1>
            <p className='text-white'>Salary Range for Freshers</p>
        </div>
    </div>
  )
}

export default Banner