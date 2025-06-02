import { Sparkles } from 'lucide-react'
import React from 'react'

const Button11 = () => {
  return (
    <div className='flex justify-center'>
      <button className="group relative inline-flex items-center gap-2 px-6 py-3
                       bg-black dark:bg-white
                       rounded-xl overflow-hidden
                       transform hover:scale-105
                       transition-all duration-300">
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#f1c40f,#e74c3c,#9b59b6,#3498db,#2ecc71,#f1c40f)]
                      animate-spin-slow blur-xl opacity-70" />
        <div className="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-[10px] z-10" />
        <Sparkles className="relative z-20 w-5 h-5 text-gray-800 dark:text-white" />
        <span className="relative z-20 text-gray-800 dark:text-white font-medium">
          Premium Feature
        </span>
      </button>
    </div>
  )
}

export default Button11