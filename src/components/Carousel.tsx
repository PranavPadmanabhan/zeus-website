
import React, {  useState } from 'react';
import styles from '@/styles/Main.module.css'

const Carousel = ({ products }: { products: string[] }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const goToNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const goToPrevious = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
    };

    // Determine the indices of items to display around the active item (7 items in total)
    const visibleItems: number[] = [];
    for (let i = -5; i <= 5; i++) {
        visibleItems.push((activeIndex + i + products.length) % products.length);
    }

    // useEffect(() => {
    //     // Dynamically set the number of visible items based on screen width
    //     const updateItemsToShow = () => {
    //         if (window.innerWidth <=600) {
    //             for (let i = 0; i <= 2; i++) {
    //                 visibleItems.push((activeIndex + i + products.length) % products.length);
    //                 setAnimationValue(120)
    //             }
    //         } else if (window.innerWidth <=1000 ) {
    //             for (let i = 0; i <= 6; i++) {
    //                 visibleItems.push((activeIndex + i + products.length) % products.length);
    //             }
    //         } else {
    //             for (let i = 0; i <= 9; i++) {
    //                 visibleItems.push((activeIndex + i + products.length) % products.length);
    //             }
    //         }
    //     };

    //     // Set initial items to show and add event listener
    //     updateItemsToShow();
    //     window.addEventListener('resize', updateItemsToShow);

    //     return () => window.removeEventListener('resize', updateItemsToShow);
    // }, []);

    return (
        <div id='products' className={`${styles.carousel} bg-accent p-4 my-5 md:p-6 h-[30vh] lg:h-[50vh] w-full  mx-auto flex flex-col items-center`}>
            {/* Header Section */}
            <div className="flex justify-between w-full mb-4 px-4">
                <h2 className="text-lg md:text-2xl font-bold text-black">Products</h2>
                <a href="#" className="text-black font-semibold hover:underline">View More</a>
            </div>

            {/* Carousel Section */}
            <div className="relative flex items-center justify-center w-full h-full">
                {/* Left Arrow */}
                <button
                    className="absolute w-[50px] h-[50px] bg-white rounded-full left-0 text-2xl  text-black hover:text-gray-600"
                    onClick={goToPrevious}
                >
                    &lt;
                </button>

                {/* Carousel Items */}
                <div className="hidden md:flex items-center justify-center pl-0 lg:pl-[300px] md:pl-0 overflow-hidden w-[70%] md:w-full h-[90%] max-w-[90%] ">
                    {products.map((product, index) => {
                        const isVisible = visibleItems.includes(index);
                        const isActive = index === activeIndex;

                        return (
                            <img
                                key={index}
                                alt={`product-${index}`}
                                className={`${styles.carouselItem} min-w-[100px] min-h-[100px] md:w-20 md:h-20 lg:min-w-[150px] lg:min-h-[150px] object-contain rounded-full bg-white transition-transform duration-300 transform ${isVisible
                                    ? 'scale-100 opacity-100'
                                    : 'scale-75 opacity-0 pointer-events-none'
                                    } ${isActive ? 'scale-110' : ''
                                    }`}
                                style={{
                                    transition: 'transform 0.5s ease-in-out',
                                    transform: `translateX(${((index - activeIndex)) * 100}px)`,
                                }}
                                src={product}
                            />
                        );
                    })}
                </div>
                <div className="md:hidden relative w-[150px] h-[150px] overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${activeIndex * 100}%)`,
                        }}
                    >
                        {products.map((item, index) => (
                            <img
                                key={index}
                                src={item}
                                alt={`img- ${index}`}
                                className="w-[150px] h-[150px] flex-shrink-0 rounded-full object-contain flex items-center justify-center text-white font-bold bg-white"
                            />
    
                        ))}
                    </div>
                </div>

                {/* Right Arrow */}
                <button
                    className="absolute w-[50px] h-[50px] bg-white rounded-full right-0 text-2xl text-black hover:text-gray-600"
                    onClick={goToNext}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Carousel;
