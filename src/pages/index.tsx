import Header from "@/components/Header";
import { useEffect, useState } from "react";


export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);
  //@typescript-eslint/no-unused-vars
  const [isSliding, setIsSliding] = useState(false);

  const images = [
    '/images/first.png',
    '/images/second.png',
    '/images/third.png',
  ];
  const interval = 3000;


  useEffect(() => {
    const timer = setInterval(() => {
      setIsSliding(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTimeout(() => setIsSliding(false), 500); // Duration of the animation
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
              alt={`Slide ${index}`}
              className="w-full h-[98vh] object-cover flex-shrink-0"
            />
          ))}
        </div>
        <div className="absolute w-full h-screen top-0 bg-transparent flex flex-col items-center justify-start">
          <Header />
        </div>
      </div>

      <footer className="w-full h-[40vh] bg-black">

      </footer>
    </div>
  );
}
