import { Trash2 } from 'lucide-react'
import React from 'react'

const Button17 = () => {
  return (
    <div className='flex justify-center'>
      <button className="group relative inline-flex items-center gap-3 px-8 py-4
                       bg-white hover:bg-red-50
                       rounded-lg overflow-hidden
                       border-2 border-red-500/20 hover:border-red-500/30
                       shadow-[0_4px_20px_rgba(239,68,68,0.1)]
                       hover:shadow-[0_8px_30px_rgba(239,68,68,0.2)]
                       transform hover:-translate-y-[2px]
                       transition-all duration-300">
        <Trash2 className="w-5 h-5 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
        <span className="text-red-500 group-hover:text-red-600 font-medium transition-colors duration-300">
          Delete
        </span>
      </button>
    </div>
  )
}

export default Button17