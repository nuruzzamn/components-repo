import { LineChart } from 'lucide-react'
import React from 'react'

const Button21 = () => {
  return (
    <div className='flex justify-center'>
      <button className="group relative inline-flex items-center gap-3 px-8 py-4
                       bg-gradient-to-br from-indigo-600 to-blue-500
                       hover:from-indigo-700 hover:to-blue-600
                       rounded-xl overflow-hidden
                       shadow-[0_4px_20px_rgba(79,70,229,0.3)]
                       hover:shadow-[0_8px_30px_rgba(79,70,229,0.4)]
                       transform hover:scale-105
                       transition-all duration-300">
        <LineChart className="w-5 h-5 text-white/90 group-hover:text-white transition-colors duration-300" />
        <span className="text-white font-bold tracking-wide">
          Analytics
        </span>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.3),rgba(255,255,255,0))]" />
      </button>
    </div>
  )
}

export default Button21