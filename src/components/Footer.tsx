import Image from 'next/image'
import React from 'react'
import styles from '@/styles/Main.module.css'

const Footer = () => {
  return (
    <footer className={`${styles.footer} w-full h-[50vh] md:h-[25vh] lg:h-[35vh] bg-white flex flex-col md:flex-row items-center justify-between px-[1em] md:px-[5em] pt-4 md:pt-0 pb-5 md:pb-0`}>
        <div className="w-[30%] h-full flex flex-col md:flex-row items-center justify-start pb-3 box-border">
          <Image src={'/images/logocolorvertcal.png'} className='flex md:hidden' width={140} height={100} alt="logo-black" />
          <Image src={'/images/logocolorhorizontal.png'} width={230} height={130} alt="logo-black" className="hidden md:flex ml-10 md:ml-3 mt-2 md:mt-0 " />
        </div>
        <div className="w-full md:w-[30%] h-full flex flex-col items-center md:items-start box-border justify-start">
          {/* <div className="w-1/2 h-full md:w-full md:h-1/2 flex flex-col items-start justify-start md:hidden">
            <span className="text-black text-[0.8em] ">Tel: 0097172687688</span>
            <span className="text-black text-[0.8em] ">Mobile: +971 0542003799</span>
            <span className="text-black text-[0.8em] ">WhatsApp: +971 0542003798</span>
            <span className="text-black text-[0.8em] ">www.zeusdxb.com</span>
            <a href="mailto:sales@zeusdxb.com" className="text-black text-[0.8em]">Email: <span className="font-semibold">sales@zeusdxb.com</span></a>
            <a href="mailto:operation@zeusdxb.com" className="text-black text-[0.8em] ml-0 md:ml-5 font-semibold">operation@zeusdxb.com</a>
          </div>
          <div className="w-1/2 h-full md:w-full md:h-1/2 flex flex-col items-end justify-start md:hidden">
            <span className="text-black text-[0.8em] ">PO Box 10050</span>
            <span className="text-black text-[0.8em] ">Ras Al Khaimah</span>
            <span className="text-black text-[0.8em] ">Business Center 03</span>
          </div> */}
          <span className={`${styles.footerItem}text-black text-[1em] `}>Tel: 0097172687688</span>
          <span className={`${styles.footerItem}text-black text-[1em] `}>Mobile: +971 0542003799</span>
          <span className={`${styles.footerItem}text-black text-[1em] `}>WhatsApp: +971 0542003798</span>
          <span className={`${styles.footerItem}text-black text-[1em] `}>www.zeusdxb.com</span>
          <span className={`${styles.footerItem}text-black text-[1em] `}>PO Box 10050</span>
          <span className={`${styles.footerItem}text-black text-[1em] `}>Ras Al Khaimah</span>
          <span className={`${styles.footerItem}text-black text-[1em] `}>Business Center 03</span>
          <a href="mailto:sales@zeusdxb.com" className="text-black text-[1em] ">Email: <span className="font-semibold">sales@zeusdxb.com</span></a>
          <a href="mailto:operation@zeusdxb.com" className="text-black text-[1em] ml-5 font-semibold ">operation@zeusdxb.com</a>
        </div>
      </footer>
  )
}

export default Footer
