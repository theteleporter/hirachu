"use client"
import { useState } from "react"

export const Header = () => {
  const [open, setOpen] = useState(false); 

    return(
        <header className="px-4 md:px-10 py-4 md:py-5 flex justify-between border-b">
        <div className="text-2xl font-light font-mono">
            hirachu
        </div>
        <div className="font-mono font-light">
            <button 
              type="button" 
              className="border px-2 cursor-pointer"
              onClick={() => setOpen(!open)}
            >
                MENU
            </button>
            {open && (
              <div className="absolute top-16 right-4 bg-white border border-gray-300 rounded shadow-lg p-4">
                <nav className="flex flex-col gap-2">
                  <a href="#" className="hover:underline">Home</a>
                  <a href="#" className="hover:underline">About</a>
                  <a href="#" className="hover:underline">Contact</a>
                </nav>
              </div>
            )}
        </div>
        </header>
    )
}