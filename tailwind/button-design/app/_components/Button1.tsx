import { ShoppingCart } from 'lucide-react'
import React from 'react'

const Button1 = () => {
  return (
      <div className='mt-10 flex justify-center'>
          <button
            // onClick={}
            className='group relative overflow-hidden
                    inline-flex items-center gap-4 px-10 py-5
                    bg-gradient-to-r from-blue-500 to-purple-500
                    hover:from-blue-700 hover:to-purple-700
                    rounded-full transform hover:scale-[1.02]
                    transition-all duration-300 ease-out
                    shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                    hover:shadow-[0_8px_30px_rgb(59,130,246,0.5)]'>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0
                          translate-x-[-100%] group-hover:translate-x-[100%]
                          transition-transform duration-1000" />
            
            <ShoppingCart className='w-7 h-7 text-white
                                  transform group-hover:rotate-12
                                  transition-transform duration-300 ease-out' />
            <span className='text-2xl font-bold text-white
                          tracking-wide group-hover:tracking-wider
                          transition-all duration-300'>
                            BUTTON 1
            </span>
          </button>
        </div>
  )
}

export default Button1