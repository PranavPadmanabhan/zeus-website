import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full h-[15vh] flex items-center justify-between md:justify-evenly  md:px-0 px-[2em] px box-border'>
      <Image className='hidden md:flex' alt='logo' height={100} width={280} src={'/images/logo.png'} />
      <Image className='flex md:hidden' alt='logo' height={50} width={150} src={'/images/logo.png'} />
      <div className="w-[50%] h-full hidden md:flex items-center justify-evenly pr-[5em]">
        <a href='#' className='text-white text-[1em] hover:font-bold cursor-pointer'>Home</a>
        <a href='#' className='text-white text-[1em] hover:font-bold cursor-pointer'>Products</a>
        <a href='#' className='text-white text-[1em] hover:font-bold cursor-pointer'>Services</a>
        <a href='#' className='text-white text-[1em] hover:font-bold cursor-pointer'>About</a>
      </div>
      <Image className='flex md:hidden' alt='burger' height={20} width={45} src={'/images/burger.png'} />

    </header>
  )
}

export default Header
