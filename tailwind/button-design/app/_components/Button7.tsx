import { Globe } from 'lucide-react'
import React from 'react'

const Button7 = () => {
  return (
    <div className='flex justify-center'>
      <button className="group relative inline-flex items-center gap-2 px-8 py-4
                       bg-blue-500/10 backdrop-blur-sm
                       border border-white/20
                       rounded-2xl
                       hover:bg-blue-500/60
                       shadow-lg shadow-black/5
                       transition-all duration-300">
        <Globe className="w-5 h-5 text-white group-hover:rotate-180 transition-transform duration-700" />
        <span className="text-white font-medium">Explore</span>
      </button>
    </div>
  )
}

export default Button7