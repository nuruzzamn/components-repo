import { Plus } from 'lucide-react'
import React from 'react'

const Button9 = () => {
  return (
    <div className='flex justify-center'>
      <button className="group relative inline-flex items-center gap-2 px-6 py-3
                       border-2 border-gray-800 dark:border-white
                       text-gray-800 dark:text-white
                       hover:bg-gray-800 hover:text-white
                       dark:hover:bg-white dark:hover:text-gray-800
                       rounded-md overflow-hidden
                       transition-colors duration-300">
        <Plus className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
        <span className="font-medium tracking-wide">Add New Item</span>
        <div className="absolute inset-0 border-2 border-gray-800 dark:border-white
                      scale-[1.15] opacity-0 group-hover:scale-100 group-hover:opacity-100
                      transition-all duration-300" />
      </button>
    </div>
  )
}

export default Button9