import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex flex-col lg:flex-row justify-between mx-6 py-3 mb-10">
      <div>
        <h3 className="text-xl font-bold text-gray-600">{new Date().toUTCString().slice(0,16)}</h3>
        <h1 className="text-2xl font-bold">Flavoro foods</h1>
      </div>
      <div>
        <input className="p-3 border border-gray-400 text-sm rounded-lg w-full lg:w-[25vw] text-center" type="search" name='search' placeholder='search here' autoComplete='off'  />
      </div>
    </nav>
  )
}

export default Navbar
