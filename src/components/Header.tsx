
import Image from 'next/image'
import React from 'react'
import styles from '@/styles/Main.module.css'
import { useRouter } from 'next/router'


const Header = ({ onClick,darkTheme = false }: { onClick:() => void,darkTheme?:boolean }) => {

  const router = useRouter()

  return (
    <header className={`${styles.Header} absolute top-0 w-full h-[15vh] flex items-center justify-between md:justify-between  md:px-[5em] px-[2em] box-border`}>
      {
        darkTheme?<Image className={`${styles.logo} hidden md:flex`} alt='logo' height={100} width={280} src={'/images/logoblackwithtext.png'} />:<Image className={`${styles.logo} hidden md:flex`} alt='logo' height={100} width={280} src={'/images/logo.png'} />
      }
      {
        darkTheme?<Image className='flex md:hidden' alt='logo' height={70} width={180} src={'/images/logoblackwithtext.png'} />:<Image className='flex md:hidden' alt='logo' height={70} width={180} src={'/images/logo.png'} />
      }
      <div className="w-[50%] h-full hidden md:flex items-center justify-evenly pr-[5em]">
        <a onClick={() => {
          router.push("/")
        }} href='#home' className={`${styles.headerItem} ${darkTheme?'text-black':'text-white'} text-[1em] hover:font-bold cursor-pointer`}>Home</a>
        <span onClick={() => router.push("/products")} className={`${styles.headerItem} ${darkTheme?'text-black':'text-white'} text-[1em] hover:font-bold cursor-pointer`}>Products</span>
        <a onClick={() => {
          router.push("/")
        }} href='#services' className={`${styles.headerItem} ${darkTheme?'text-black':'text-white'} text-[1em] hover:font-bold cursor-pointer`}>Services</a>
        <a onClick={() => {
          router.push("/")
        }} href='#aboutus' className={`${styles.headerItem} ${darkTheme?'text-black':'text-white'} text-[1em] hover:font-bold cursor-pointer`}>About</a>
      </div>
      {
        darkTheme?<Image onClick={onClick} className='flex md:hidden' alt='burger' height={20} width={45} src={'/images/burger-black.png'} />:<Image onClick={onClick} className='flex md:hidden' alt='burger' height={20} width={45} src={'/images/burger.png'} />
      }

    </header>
  )
}

export default Header
