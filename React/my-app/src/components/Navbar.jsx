import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const[bar, setBar] = useState('false');
  const handleClick = ()=>{
        setBar(true);
  }
  return (
    <div>
      <nav className='relative top-0 flex justify-between px-8 p-2 bg-zinc-700 border-b border-black text-gray-200 items-center'>
        <div>
          <h1 className='text-xl tracking-wide font-bold'>Logo</h1>
        </div>
        <div>
          <ul className='md:flex gap-4 text-sm hidden md:block'>
            <li>Home</li>
            <li>About</li>
            <li>Explore</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='flex items-center gap-4 text-xl '>
          <button className='border py-1 px-4 rounded-md text-sm'>Get Started</button>
           <div className='md:hidden bg-gray-900 rounded p-1'>
            <GiHamburgerMenu onClick={()=>{handleClick()}}/>
           </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
