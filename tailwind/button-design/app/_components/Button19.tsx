import { Save } from 'lucide-react'
import React from 'react'

const Button19 = () => {
  return (
    <div className='flex justify-center'>
      <button className="group relative inline-flex items-center gap-3 px-8 py-4
                       bg-gradient-to-br from-blue-500 to-cyan-500
                       hover:from-blue-600 hover:to-cyan-600
                       rounded-lg overflow-hidden
                       shadow-[0_4px_20px_rgba(59,130,246,0.3)]
                       hover:shadow-[0_8px_30px_rgba(59,130,246,0.4)]
                       transform hover:-translate-y-[2px]
                       transition-all duration-300">
        <Save className="w-5 h-5 text-white/90 group-hover:text-white
                      group-hover:scale-110 transition-all duration-300" />
        <span className="text-white font-semibold tracking-wide">
          Save Changes
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </button>
    </div>
  )
}

export default Button19