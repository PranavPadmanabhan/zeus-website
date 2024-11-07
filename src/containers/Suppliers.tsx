import { suppliers } from '@/constants/constants';
import React from 'react'
import styles from '@/styles/Main.module.css'

const Suppliers = () => {

    function divideArray<T>(array: T[], size: number): T[][] {
        if (size <= 0) throw new Error("size must be a positive integer.");

        const result: T[][] = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    }

    return (
        <section className={`${styles.suppliers_section} w-full min-h-[80vh] bg-white flex flex-col items-center justify-start p-5 box-border`}>
            <h2 data-aos="fade-up" className={`${styles.suppliers_heading} self-start ml-4 text-lg md:text-2xl lg:text-[2em] font-extrabold text-black mb-5`}>Suppliers</h2>
            {
                divideArray(suppliers, 6).map((list, index) => (
                    <div data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} key={index} className='hidden w-full h-[10vh] lg:flex items-center justify-evenly my-2'>
                        {
                            list.map((item, i) => (
                                <img key={(index * 6) + i} src={item} alt={`logo - ${(index * 6) + i}`} className={`w-auto ${(index * 6) + i === 28 || (index * 6) + i === 30 || (index * 6) + i === 35 ? 'max-h-full min-h-[100px] object-fill' : 'max-h-[70%] min-h-[30px]'} object-contain`} />
                            ))
                        }
                    </div>
                ))
            }
            {
                divideArray(suppliers, 4).map((list, index) => (
                    <div data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} key={index} className='flex w-full h-[5vh] md:hidden lg:hidden items-center justify-evenly my-2'>
                        {
                            list.map((item, i) => (
                                <img key={(index * 6) + i} src={item} alt={`logo - ${(index * 6) + i}`} className='w-[20%] h-[70%] object-contain' />
                            ))
                        }
                    </div>
                ))
            }
            {
                divideArray(suppliers, 5).map((list, index) => (
                    <div data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} key={index} className='hidden w-full h-[7vh] md:flex lg:hidden items-center justify-evenly my-2'>
                        {
                            list.map((item, i) => (
                                <img key={(index * 6) + i} src={item} alt={`logo - ${(index * 6) + i}`} className='w-[15%] h-[60%] object-contain' />
                            ))
                        }
                    </div>
                ))
            }
        </section>
    )
}

export default Suppliers
