import { Settings } from 'lucide-react'
import React from 'react'

const Button20 = () => {
  return (
    <div className='flex justify-center'>
      <button className="group relative inline-flex items-center gap-3 px-8 py-4
                       bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700
                       rounded-lg overflow-hidden
                       shadow-[0_4px_20px_rgba(0,0,0,0.1)]
                       hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]
                       transform hover:-translate-y-[2px]
                       transition-all duration-300">
        <Settings className="w-5 h-5 text-gray-600 dark:text-gray-300
                         group-hover:rotate-90 transition-transform duration-500" />
        <span className="text-gray-700 dark:text-gray-200 font-medium">
          Settings
        </span>
      </button>
    </div>
  )
}

export default Button20