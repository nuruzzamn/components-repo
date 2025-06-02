import { BarChart2 } from 'lucide-react'
import React from 'react'

const Button16 = () => {
  return (
    <div className='flex justify-center'>
      <button className="group relative inline-flex items-center gap-3 px-8 py-4
                       bg-gradient-to-br from-violet-500 to-purple-600
                       hover:from-violet-600 hover:to-purple-700
                       rounded-xl overflow-hidden
                       shadow-[0_4px_20px_rgba(139,92,246,0.3)]
                       hover:shadow-[0_8px_30px_rgba(139,92,246,0.4)]
                       transform hover:scale-105
                       transition-all duration-300">
        <BarChart2 className="w-5 h-5 text-white/90 group-hover:text-white transition-colors duration-300" />
        <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent
                      font-bold tracking-wide group-hover:tracking-wider transition-all duration-300">
          Dashboard
        </span>
      </button>
    </div>
  )
}

export default Button16