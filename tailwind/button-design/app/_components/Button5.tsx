import { Zap } from 'lucide-react'
import React from 'react'

const Button5 = () => {
  return (
    <div className='flex justify-center'>
      <button className="group relative inline-flex items-center gap-2 px-8 py-4
                       bg-indigo-600 rounded-lg overflow-hidden
                       animate-pulse hover:animate-none
                       hover:shadow-[0_0_20px_rgba(79,70,229,0.5)]
                       transition-all duration-300">
        <Zap className="w-5 h-5 text-white group-hover:animate-bounce" />
        <span className="text-white font-semibold tracking-wide">Power Up</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                      translate-x-[-100%] group-hover:translate-x-[100%]
                      transition-transform duration-700" />
      </button>
    </div>
  )
}

export default Button5