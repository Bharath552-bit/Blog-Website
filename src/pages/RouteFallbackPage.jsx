import React from 'react'
import { Link } from 'react-router-dom'

function RouteFallbackPage() {
  return (
    <div>
        
        <section className="min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 flex items-center justify-center px-4">
            
            <div className="max-w-2xl text-center">
                
                <h1 className="text-[120px] sm:text-[160px] font-extrabold text-cyan-400 leading-none drop-shadow-lg">
                    404
                </h1>

                <p className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-wide">
                    Something's missing.
                </p>

                <p className="mt-5 text-gray-400 text-base sm:text-lg leading-8 max-w-xl mx-auto">
                    Sorry, we can’t find that page. The page you are looking for might have been removed, renamed, or temporarily unavailable.
                </p>

                <div className='mt-10'>
                    <Link
                      to="/"
                      className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-7 py-3 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
                    >
                      Back to Homepage
                    </Link>
                </div>

            </div>   
        </section>

    </div>
  )
}

export default RouteFallbackPage