import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import styles from '@/styles/Main.module.css'


export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);
  //@typescript-eslint/no-unused-vars
  // const [isSliding, setIsSliding] = useState(false);

  const images = [
    '/images/first.png',
    '/images/second.png',
    '/images/third.png',
  ];
  const interval = 3000;


  useEffect(() => {
    const timer = setInterval(() => {
      // setIsSliding(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      // setTimeout(() => setIsSliding(false), 500); // Duration of the animation
    }, interval);

    return () => clearInterval(timer); // Clean up the timer on unmount
  }, [images.length, interval]);

  // const goToNext = () => {
  //   setIsSliding(true);
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   setTimeout(() => setIsSliding(false), 500); // Duration of the animation
  // };

  // const goToPrev = () => {
  //   setIsSliding(true);
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   );
  //   setTimeout(() => setIsSliding(false), 500); // Duration of the animation
  // };
  return (
    <div
      className={`w-full min-h-[100vh] flex flex-col items-center justify-start overflow-x-hidden`}
    >
      <div className="relative w-full h-[98vh]">
        <div className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`image ${index}`}
              className="w-full h-[98vh] object-cover flex-shrink-0"
            />
          ))}
        </div>
        <div className="absolute w-full h-screen top-0 bg-transparent flex flex-col items-start justify-center">
          <Header />
          <div className="flex flex-col items-center md:items-start justify-center w-full h-full pl-0 md:pl-[5em] box-border">
          <p className={`${styles.para} hidden md:flex text-white text-[3em] font-bold text-left`}>Driving Efficiency with<br /> Top-Quality Machinery<br/> and Spare Parts Solutions</p>
          <p className="flex md:hidden text-white text-[1.8em] font-bold text-center">Driving Efficiency with<br /> Top-Quality<br /> Machinery and Spare<br /> Parts Solutions</p>
          <div className="flex flex-col md:flex-row items-center justify-start mt-[23vh] -mb-[23vh] md:mt-10 md:-mb-16 gap-y-5 gap-x-5">
            <a href="https://wa.me/+971542003798" className="flex items-center justify-center bg-white px-4 py-3 rounded-full gap-x-2 cursor-pointer"> 
              <FaWhatsapp size={24} color="green" />
              <span className="text-black font-[600] text-[1em]">Whatsapp</span>
            </a>
            <a href="#" className="text-white font-[600] text-[1em] underline">Download Brochure</a>
          </div>
          </div>
        </div>
      </div>

      <footer className="w-full h-[40vh] bg-black">

      </footer>
    </div>
  );
}
