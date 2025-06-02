import { ArrowRight } from 'lucide-react'
import React from 'react'

const Button14 = () => {
  return (
    <div className='flex justify-center'>
      <button className="group relative inline-flex items-center gap-3 px-8 py-4
                       bg-white dark:bg-gray-900
                       rounded-lg overflow-hidden
                       shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_4px_20px_rgba(0,0,0,0.1)]
                       dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.2)]
                       hover:shadow-[0_0_0_1px_rgba(0,0,0,0.2),0_8px_30px_rgba(0,0,0,0.15)]
                       dark:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_8px_30px_rgba(0,0,0,0.3)]
                       transform hover:-translate-y-[2px]
                       transition-all duration-300">
        <span className="text-gray-800 dark:text-white font-medium">Learn More</span>
        <ArrowRight className="w-5 h-5 text-gray-600 dark:text-gray-400
                             group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </div>
  )
}

export default Button14