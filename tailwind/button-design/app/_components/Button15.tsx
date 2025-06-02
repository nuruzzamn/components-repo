import { Check } from 'lucide-react'
import React from 'react'

const Button15 = () => {
  return (
    <div className='flex justify-center'>
      <button className="group relative inline-flex items-center gap-3 px-8 py-4
                       bg-emerald-500 hover:bg-emerald-600
                       rounded-lg overflow-hidden
                       shadow-[0_4px_20px_rgba(16,185,129,0.3)]
                       hover:shadow-[0_8px_30px_rgba(16,185,129,0.4)]
                       transform hover:-translate-y-[2px]
                       transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        <Check className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
        <span className="text-white font-semibold">Confirm</span>
      </button>
    </div>
  )
}

export default Button15