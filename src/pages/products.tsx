import Header from '@/components/Header'
import { products } from '@/constants/constants'
import { useAppContext } from '@/contexts/AppContext'
import React from 'react'
import styles from '@/styles/Main.module.css'
import Footer from '@/components/Footer'
import Drawer from '@/components/Drawer'
import 'aos/dist/aos.css';

const Products = () => {
  const { isModalOpen, setIsModalOpen } = useAppContext()
  return (
    <div className='relative w-full min-h-screen flex flex-col items-center justify-start bg-white pt-[10vh] lg:pt-[15vh] box-border'>
      <Header darkTheme onClick={() => setIsModalOpen(true)} />
      {
        isModalOpen && <Drawer darkTheme/>
      }
      <h1 className={`${styles.headingProducts}text-black font-bold text-[1.8em] self-start ml-[5%] my-5`}>Products</h1>
      {
        products.map((item, i) => (
          <div key={i} className={`${styles.gridContainer} w-full min-h-[50vh] h-auto flex flex-col items-center justify-start`}>
            <div data-aos={i%2=== 0 ?"fade-left":"fade-right"} className=" w-[95%] h-[1px] bg-gray-500 flex items-center justify-start mt-2 mb-8">
              <div className="bg-white h-[40px] w-[60px] flex items-center justify-center font-bold text-[1.4em] tracking-wider text-gray-500 ml-[10%]">#{i + 1}</div>
            </div>
            <div className={`${styles.grid} w-full min-h-[50vh] grid grid-cols-2 lg:grid-cols-4 place-content-center px-5 box-border gap-x-5 gap-y-8 my-5`}>
              {
                item.map((prod, index) => (
                  <div key={(i * 13) + index} className={`${styles.gridItem} w-full h-[30vh] lg:h-[40vh] bg-white flex flex-col items-center justify-between`}>
                    <div data-aos="fade-up" style={{ backgroundImage: `url(${prod.url})` }} className="w-full lg:w-[90%] h-[85%] bg-center bg-full bg-no-repeat bg-contain"></div>
                    <span data-aos="fade-up" className={`${styles.gridItemText} text-black mt-1 font-semibold text-[1em]`}>{prod.title}</span>
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
      <Footer />
    </div>
  )
}

export default Products
