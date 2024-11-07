import Image from 'next/image'
import React from 'react'
import styles from '@/styles/Main.module.css'

const Footer = () => {
  return (
    <footer className={`${styles.footer} w-full h-[45vh] md:h-[25vh] lg:h-[35vh] bg-white flex flex-col md:flex-row items-center justify-between px-[1em] md:px-[5em] pt-4 md:pt-0 pb-5 md:pb-0`}>
        <div className="w-[30%] h-full flex flex-col md:flex-row items-center justify-start pb-3 box-border">
          <Image src={'/images/logo-black.png'} width={90} height={80} alt="logo-black" />
          <Image src={'/images/logotext.png'} width={170} height={90} alt="logo-black" className="ml-10 md:ml-3 mt-2 md:mt-0 " />
        </div>
        <div className="w-full md:w-[30%] h-full flex flex-row md:flex-col items-start pl-5 box-border justify-center">
          <div className="w-1/2 h-full md:w-full md:h-1/2 flex flex-col items-start justify-start md:hidden">
            <span className="text-black text-[0.8em] ">Tel: 0097172687688</span>
            <span className="text-black text-[0.8em] ">Mobile: +971 542003798</span>
            <span className="text-black text-[0.8em] ">Mobile: +971 542003797</span>
            <a href="mailto:sales@zeusdxb.com" className="text-black text-[0.8em]">Email: <span className="font-semibold">sales@zeusdxb.com</span></a>
            <a href="mailto:operation@zeusdxb.com" className="text-black text-[0.8em] ml-0 md:ml-5 font-semibold">operation@zeusdxb.com</a>
          </div>
          <div className="w-1/2 h-full md:w-full md:h-1/2 flex flex-col items-end justify-start md:hidden">
            <span className="text-black text-[0.8em] ">PO Box 10050</span>
            <span className="text-black text-[0.8em] ">Ras Al Khaimah</span>
            <span className="text-black text-[0.8em] ">Business Center 03</span>
          </div>
          <span className={`${styles.footerItem}text-black text-[1em] hidden md:flex`}>Tel: 0097172687688</span>
          <span className={`${styles.footerItem}text-black text-[1em] hidden md:flex`}>Mobile: +971 542003798</span>
          <span className={`${styles.footerItem}text-black text-[1em] hidden md:flex`}>Mobile: +971 542003797</span>
          <span className={`${styles.footerItem}text-black text-[1em] hidden md:flex`}>PO Box 10050</span>
          <span className={`${styles.footerItem}text-black text-[1em] hidden md:flex`}>Ras Al Khaimah</span>
          <span className={`${styles.footerItem}text-black text-[1em] hidden md:flex`}>Business Center 03</span>
          <a href="mailto:sales@zeusdxb.com" className="text-black text-[1em] hidden md:flex">Email: <span className="font-semibold">sales@zeusdxb.com</span></a>
          <a href="mailto:operation@zeusdxb.com" className="text-black text-[1em] ml-5 font-semibold hidden md:flex">operation@zeusdxb.com</a>
        </div>
      </footer>
  )
}

export default Footer
