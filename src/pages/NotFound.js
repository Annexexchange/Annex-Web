import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-start mt-20'>
      <div className='font-roboto font-black text-center text-9xl'>404 Not Found!</div>
      <div>
        <Link to='/' className='font-roboto font-normal text-lg text-center text-purple-annex underline'>Go back to safety</Link>
      </div>
    </div>
  )
}

export default NotFound