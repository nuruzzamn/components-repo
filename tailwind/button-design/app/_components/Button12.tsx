import { Shield } from 'lucide-react'
import React from 'react'

const Button12 = () => {
  return (
    <div className='flex justify-center'>
      <button className="group relative inline-flex items-center gap-3 px-8 py-4
                       bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800
                       hover:from-slate-900 hover:via-slate-800 hover:to-slate-900
                       rounded-lg overflow-hidden
                       shadow-[0_4px_20px_rgba(0,0,0,0.1)]
                       hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]
                       transform hover:-translate-y-[2px]
                       transition-all duration-300">
        <Shield className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
        <span className="text-white font-semibold tracking-wide">Enterprise</span>
        <div className="absolute inset-0 border border-white/10
                      rounded-lg scale-[0.98] group-hover:scale-100
                      transition-transform duration-300" />
      </button>
    </div>
  )
}

export default Button12