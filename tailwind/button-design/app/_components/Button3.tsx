import { Sparkles } from 'lucide-react'
import React from 'react'

const Button3 = () => {
  return (
    <div className='flex justify-center'>
      <button className="group relative inline-flex items-center gap-2 px-6 py-3
                       border-2 border-purple-500 text-purple-500 font-medium rounded-full
                       hover:text-white overflow-hidden
                       transition-all duration-300 ease-out">
        <Sparkles className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
        <span className="relative z-10">Magic Button</span>
        <div className="absolute inset-0 bg-purple-500 scale-0 group-hover:scale-100 
                      rounded-full transition-transform duration-300 ease-out" />
      </button>
    </div>
  )
}

export default Button3