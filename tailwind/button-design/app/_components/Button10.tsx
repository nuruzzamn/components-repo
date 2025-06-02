"use client"
import { Loader2 } from 'lucide-react'
import React, { useState } from 'react'

const Button10 = () => {
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className='flex justify-center'>
      <button
        onClick={handleClick}
        disabled={loading}
        className={`relative inline-flex items-center justify-center px-8 py-3
                  bg-indigo-600 hover:bg-indigo-700
                  rounded-lg overflow-hidden
                  transition-all duration-300
                  disabled:opacity-70 disabled:cursor-not-allowed
                  ${loading ? 'w-12' : 'w-36'}`}>
        <span className={`text-white font-medium
                       ${loading ? 'opacity-0' : 'opacity-100'}
                       transition-opacity duration-300`}>
          Submit
        </span>
        <Loader2 className={`absolute w-6 h-6 text-white animate-spin
                          ${loading ? 'opacity-100' : 'opacity-0'}
                          transition-opacity duration-300`} />
      </button>
    </div>
  )
}

export default Button10