import React from 'react'

const Error = ({mensaje}) => {
  return (
    <div className='bg-red-700 text-white text-center text-sm p-3 uppercase font-bold mb-3 rounded'>
        <p>{mensaje}</p>
    </div>
  )
}

export default Error