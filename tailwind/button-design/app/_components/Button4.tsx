import { Heart } from 'lucide-react'
import React from 'react'

const Button4 = () => {
  return (
    <div className='flex justify-center'>
      <button className="group flex items-center gap-2 px-8 py-4
                       bg-gray-100 rounded-xl
                       shadow-[inset_-2px_-2px_8px_rgba(255,255,255,1),
                               inset_2px_2px_8px_rgba(0,0,0,0.15)]
                       hover:shadow-[inset_2px_2px_8px_rgba(255,255,255,1),
                                   inset_-2px_-2px_8px_rgba(0,0,0,0.15)]
                       transition-all duration-300">
        <Heart className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform duration-300" />
        <span className="text-gray-700 font-medium">Like</span>
      </button>
    </div>
  )
}

export default Button4