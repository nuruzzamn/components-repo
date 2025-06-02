import { ArrowRight } from 'lucide-react'
import React from 'react'

const Button2 = () => {
  return (
    <div className='flex justify-center'>
      <button className="group relative inline-flex items-center gap-2 px-8 py-4
                       bg-emerald-500 text-white font-semibold rounded-lg
                       overflow-hidden transform hover:scale-105
                       transition-all duration-300 ease-out
                       shadow-emerald-200 shadow-lg hover:shadow-emerald-300">
        <span className="relative z-10">Get Started</span>
        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
        <div className="absolute inset-0 bg-emerald-600 scale-x-0 group-hover:scale-x-100 
                      origin-left transition-transform duration-300 ease-out" />
      </button>
    </div>
  )
}

export default Button2