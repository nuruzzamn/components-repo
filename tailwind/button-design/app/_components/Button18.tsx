import { Crown } from 'lucide-react'
import React from 'react'

const Button18 = () => {
  return (
    <div className='flex justify-center'>
      <button className="group relative inline-flex items-center gap-3 px-8 py-4
                       bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
                       hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700
                       rounded-lg overflow-hidden
                       shadow-[0_4px_20px_rgba(234,179,8,0.3)]
                       hover:shadow-[0_8px_30px_rgba(234,179,8,0.4)]
                       transform hover:scale-[1.02]
                       transition-all duration-300">
        <Crown className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
        <span className="text-white font-bold tracking-wide">
          Upgrade to Pro
        </span>
        <div className="absolute top-0 left-0 w-full h-full
                      bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.3),rgba(255,255,255,0))]" />
      </button>
    </div>
  )
}

export default Button18