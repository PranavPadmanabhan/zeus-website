/* eslint-disable simple-import-sort/imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';

const Carousel = ({ products }:{products:string[]}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animationValue, setAnimationValue] = useState(80)

    const goToNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const goToPrevious = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
    };

    // Determine the indices of items to display around the active item (7 items in total)
    const visibleItems:number[] = [];
    for (let i = -5; i <= 5; i++) {
        visibleItems.push((activeIndex + i + products.length) % products.length);
    }

    useEffect(() => {
        // Dynamically set the number of visible items based on screen width
        const updateItemsToShow = () => {
            if (window.innerWidth <=600) {
                for (let i = 0; i <= 2; i++) {
                    visibleItems.push((activeIndex + i + products.length) % products.length);
                    setAnimationValue(120)
                }
            } else if (window.innerWidth <=1000 ) {
                for (let i = 0; i <= 6; i++) {
                    visibleItems.push((activeIndex + i + products.length) % products.length);
                }
            } else {
                for (let i = 0; i <= 9; i++) {
                    visibleItems.push((activeIndex + i + products.length) % products.length);
                }
            }
        };

        // Set initial items to show and add event listener
        updateItemsToShow();
        window.addEventListener('resize', updateItemsToShow);
        
        return () => window.removeEventListener('resize', updateItemsToShow);
    }, []);

    return (
        <div className="bg-pink-100 p-4 my-5 md:p-6 h-[30vh] lg:h-[50vh] w-full  mx-auto flex flex-col items-center">
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
                <div className="flex items-center justify-center pl-[300px] overflow-hidden w-[70%] md:w-full h-[90%] border-2 max-w-[90%] snap-mandatory px-6">
                    {products.map((product, index) => {
                        const isVisible = visibleItems.includes(index);
                        const isActive = index === activeIndex;

                        return (
                            <div
                                key={index}
                                className={`snap-center border-2 min-w-[100px] min-h-[100px] md:w-20 md:h-20 lg:min-w-[150px] lg:min-h-[150px] rounded-full bg-white transition-transform duration-300 transform ${
                                    isVisible
                                        ? 'scale-100 opacity-100'
                                        : 'scale-75 opacity-0 pointer-events-none'
                                } ${
                                    isActive ? 'scale-110' : ''
                                }`}
                                style={{
                                    transition: 'transform 0.5s ease-in-out',
                                    transform: `translateX(${((index - activeIndex)) * animationValue}px)`,
                                }}
                            />
                        );
                    })}
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
