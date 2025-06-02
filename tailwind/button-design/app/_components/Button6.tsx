import { Download } from 'lucide-react'
import React from 'react'

const Button6 = () => {
  return (
    <div className='flex justify-center'>
      <button className="group relative inline-flex items-center gap-2 px-8 py-4
                       bg-green-500 text-white font-bold
                       rounded-lg transform hover:-translate-y-1
                       shadow-[0_6px_0_rgb(22,163,74)]
                       hover:shadow-[0_4px_0_rgb(22,163,74)]
                       active:transform active:translate-y-0
                       active:shadow-[0_2px_0_rgb(22,163,74)]
                       transition-all duration-150">
        <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-150" />
        <span>Download</span>
      </button>
    </div>
  )
}

export default Button6