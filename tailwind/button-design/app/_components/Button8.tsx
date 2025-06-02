import { ArrowRight } from 'lucide-react'
import React from 'react'

const Button8 = () => {
  return (
    <div className='flex justify-center'>
      <button className="group relative inline-flex items-center gap-3 px-8 py-4
                       bg-gradient-to-br from-blue-600 to-blue-700
                       hover:from-blue-700 hover:to-blue-800
                       rounded-lg
                       shadow-xl shadow-blue-500/20
                       hover:shadow-blue-500/30
                       transform hover:translate-y-[-2px]
                       transition-all duration-300">
        <span className="relative z-10 text-white font-semibold tracking-wide">Get Started</span>
        <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-white
                             group-hover:translate-x-1 transition-all duration-300" />
        <div className="absolute inset-0 rounded-lg bg-white/20 blur opacity-0
                      group-hover:opacity-100 transition-opacity duration-300" />
      </button>
    </div>
  )
}

export default Button8