import Image from 'next/image'
import React from 'react'
import styles from '@/styles/Main.module.css'


const Header = () => {
  return (
    <header className={`${styles.Header} absolute top-0 w-full h-[15vh] flex items-center justify-between md:justify-between  md:px-[5em] px-[2em] box-border`}>
      <Image className={`${styles.logo} hidden md:flex`} alt='logo' height={100} width={280} src={'/images/logo.png'} />
      <Image className='flex md:hidden' alt='logo' height={70} width={180} src={'/images/logo.png'} />
      <div className="w-[50%] h-full hidden md:flex items-center justify-evenly pr-[5em]">
        <a href='#home' className={`${styles.headerItem} text-white text-[1em] hover:font-bold cursor-pointer`}>Home</a>
        <a href='#' className={`${styles.headerItem} text-white text-[1em] hover:font-bold cursor-pointer`}>Products</a>
        <a href='#services' className={`${styles.headerItem} text-white text-[1em] hover:font-bold cursor-pointer`}>Services</a>
        <a href='#aboutus' className={`${styles.headerItem} text-white text-[1em] hover:font-bold cursor-pointer`}>About</a>
      </div>
      <Image className='flex md:hidden' alt='burger' height={20} width={45} src={'/images/burger.png'} />

    </header>
  )
}

export default Header
