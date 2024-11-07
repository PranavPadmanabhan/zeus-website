import { useAppContext } from '@/contexts/AppContext';
import React from 'react'
import styles from '@/styles/Main.module.css'
import { FaPlus } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Drawer = ({darkTheme=false}:{darkTheme?:boolean}) => {
    const { setIsModalOpen } = useAppContext()
    const router = useRouter()

  return (
    <div className="fixed z-10  flex md:hidden top-0 right-0 w-[75%] h-screen bg-rgba(250,250,250,0.5) backdrop-blur-md flex-col items-center justify-start py-5 transition-transform duration-500">
          <FaPlus onClick={() => setIsModalOpen(false)} color='white' size={30} className="rotate-45 self-end mr-6 mb-8 mt-5" />
          <a onClick={() => {
            setIsModalOpen(false);
            router.push("/")
          }} href='#home' className={`${styles.headerItem} ${darkTheme?'text-black':'text-white'} text-[1em] hover:font-bold cursor-pointer mt-5`}>Home</a>
          <a onClick={() => {
            setIsModalOpen(false);
            router.push("/products")
          }} className={`${styles.headerItem} ${darkTheme?'text-black':'text-white'} text-[1em] hover:font-bold cursor-pointer mt-5`}>Products</a>
          <a onClick={() => {
            setIsModalOpen(false);
            router.push("/")
          }} href='#services' className={`${styles.headerItem} ${darkTheme?'text-black':'text-white'} text-[1em] hover:font-bold cursor-pointer mt-5`}>Services</a>
          <a onClick={() => {
            setIsModalOpen(false);
            router.push("/")
          }} href='#aboutus' className={`${styles.headerItem} ${darkTheme?'text-black':'text-white'} text-[1em] hover:font-bold cursor-pointer mt-5`}>About</a>

        </div>
  )
}

export default Drawer
