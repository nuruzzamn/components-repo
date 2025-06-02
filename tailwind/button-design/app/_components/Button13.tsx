import { Star } from 'lucide-react'
import React from 'react'

const Button13 = () => {
  return (
    <div className='flex justify-center'>
      <button className="group relative inline-flex items-center gap-3 px-8 py-4
                       bg-gradient-to-br from-amber-400 to-amber-600
                       hover:from-amber-500 hover:to-amber-700
                       rounded-xl overflow-hidden
                       shadow-[0_4px_20px_rgba(251,191,36,0.3)]
                       hover:shadow-[0_8px_30px_rgba(251,191,36,0.4)]
                       transform hover:scale-[1.02]
                       transition-all duration-300">
        <div className="absolute top-0 left-0 w-full h-full
                      bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.3),rgba(255,255,255,0))]" />
        <Star className="w-5 h-5 text-white fill-white group-hover:rotate-[20deg] transition-transform duration-300" />
        <span className="text-white font-bold tracking-wide">Premium</span>
      </button>
    </div>
  )
}

export default Button13