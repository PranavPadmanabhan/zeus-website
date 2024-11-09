
import Header from "@/components/Header";
import { useEffect, useRef, useState } from "react";
import { FaChevronRight, FaWhatsapp } from "react-icons/fa";
import styles from '@/styles/Main.module.css'
import emailjs from '@emailjs/browser';
import Carousel from "@/components/Carousel";
import Head from 'next/head';
import { useAppContext } from "@/contexts/AppContext";
import Footer from "@/components/Footer";
import Suppliers from "@/containers/Suppliers";
import { suppliers } from "@/constants/constants";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Drawer from "@/components/Drawer";
import { Logo } from "@/components/icons";

const preloadImages = (srcArray: string[]): Promise<void[]> => {
  return Promise.all(
    srcArray.map((src) => {
      return new Promise<void>((resolve) => {
        const img = document.createElement('img');
        img.src = src;
        img.onload = () => resolve();
      });
    })
  );
};
export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);
  //@typescript-eslint/no-unused-vars
  // const [isSliding, setIsSliding] = useState(false);
  const { isModalOpen, setIsModalOpen } = useAppContext()
  const [buttonTitle, setButtonTitle] = useState("send")
  const [errorType, setErrorType] = useState<"failed" | "empty" | null>(null)
  const [areImagesLoaded, setAreImagesLoaded] = useState<boolean>(false);


  const images = [
    '/images/third.png',
    '/images/second.png',
    '/images/first.png',
  ];
  const interval = 3000;
  //@typescript-eslint/no-explicit-any
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (form.current && form!.current.message.value.trim().length > 0 && form!.current.user_name.value.trim().length && form!.current.user_email.value.trim().length) {
      setButtonTitle("sending..")
      emailjs
        .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID!, process.env.NEXT_PUBLIC_TEMPLATE_ID!, form!.current, {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
        })
        .then(
          () => {
            if (form.current) {
              form.current.reset();
            }
            setButtonTitle("sent ")
            setTimeout(() => {
              setButtonTitle("send")
            }, 3000);
            setErrorType(null)


          },
          (error) => {
            console.log(error)
            setButtonTitle("failed")
            setErrorType("failed")
          },
        );
    }
    else {
      setErrorType("empty")

    }

  };

  useEffect(() => {
    AOS.init();
  }, [])

  useEffect(() => {

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const products = [
    '/images/1.png',
    '/images/2.JPG',
    '/images/3.JPG',
    '/images/4.JPG',
    '/images/5.JPG',
    '/images/6.JPG',
    '/images/7.png',
    '/images/8.JPG',
    '/images/9.png',

  ];


  useEffect(() => {
    preloadImages(["/images/logo.png","/images/enquiry.jpeg",'/images/burger.png',...images, ...products, ...suppliers]).then(() => {
      setAreImagesLoaded(true);
    });
  }, [])




  return (
    <div
      className={`w-full min-h-[100vh] bg-white flex flex-col items-center justify-start overflow-x-hidden scrollbar-hide`}
    >
      <Head>
        <title>Zeus</title>
      </Head>

      {
        !areImagesLoaded && (
          <div className="fixed z-[100] top-0 w-full h-[100vh] bg-black flex flex-col items-center justify-center">
            <Logo width={150} height={100} className="animate-pulse" />
            <span className="text-white text-[1.1em] mt-2 animate-pulse">Getting ready..</span>
          </div>
        )
      }


      {
        areImagesLoaded && (
          <section id="home" className={`${styles.firstSection} relative w-full h-[98vh] md:h-[60vh] lg:h-[98vh]`}>
        <div className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`image ${index}`}
              className={`${styles.firstSection} w-full h-[98vh] md:h-[60vh] lg:h-[98vh] object-cover flex-shrink-0`}
            />
          ))}
        </div>
        {isModalOpen && (<Drawer />)
        }
        <div className={`${styles.firstSection} absolute w-full h-[98vh] md:h-[60vh] lg:h-[98vh] top-0 bg-transparent flex flex-col items-start justify-center`}>
          <Header onClick={() => setIsModalOpen(true)} />
          <div className="flex flex-col items-center md:items-start justify-center w-full h-full pl-0 md:pl-[5em] box-border">
            <p data-aos="fade-up" className={`${styles.para}  hidden md:flex text-white text-[3em] font-bold text-left`}>Driving Efficiency with<br /> Top-Quality Machinery<br /> and Spare Parts Solutions</p>
            <p data-aos="fade-up"  className={`${styles.para} flex md:hidden text-white text-[1.8em] font-bold text-center`}>Driving Efficiency with<br /> Top-Quality<br /> Machinery and Spare<br /> Parts Solutions</p>
            <div className={`${styles.buttonContainer} flex flex-col md:flex-row items-center justify-start mt-[23vh] -mb-[23vh] md:mt-10 md:-mb-16 gap-y-5 lg:gap-y-[10vh] gap-x-5`}>
              <a data-aos="fade-up"  href="https://wa.me/+971542003798" className="flex items-center justify-center bg-white px-4 py-3 rounded-full gap-x-2 cursor-pointer">
                <FaWhatsapp size={24} color="green" />
                <span className="text-black font-[600] text-[1em]">Whatsapp</span>
              </a>
              <a data-aos="fade-up"  href="https://drive.google.com/uc?export=download&id=1B_kHNzW9huKHmWpsh8Xq1cvgUvcAq5-H" className="text-white font-[600] text-[1em] underline">Download Brochure</a>
            </div>
          </div>
        </div>
      </section >
        )
      }
      <section id="aboutus" className={`${styles.secondSection} w-full h-[100vh] max-h-full md:max-h-[750px] lg:max-h-full md:h-[50vh] lg:h-[110vh] bg-white flex flex-col md:flex-row items-center justify-between py-[2em] box-border`}>
        <div data-aos="fade-right" className={`${styles.clipright} w-full md:w-[95%] h-full bg-accent flex flex-col md:flex-row items-center justify-start`}>
          <div className="w-full md:w-1/2 h-[80%] md:h-[70%] bg-transparent flex flex-col items-center md:items-start justify-start pl-0 md:pl-16">
            <h1 className={`${styles.secondSectionHeading} text-[28px] md:text-[40px] lg:text-[50px] font-bold mt-12 mb-5 md:mt-3 lg:mt-3 md:mb-5`}>About Us</h1>
            <p className={`${styles.secondSectionpara} text-[1em] md:text-[1.17em] lg:text-[1.3em] max-w-[90%] text-center md:text-left  md:max-w-[95%] `}>At Zeus, we pride ourselves on being a one-stop solution for machinery and spare parts. With years of experience and a dedicated team, we ensure that you receive the highest quality products at competitive prices. Whether it’s a large industrial machine or a simple spare part, we have you covered.</p>
          </div>
        </div>
        <div data-aos="fade-left"  style={{ backgroundImage: 'url(/images/about.png)' }} className={`${styles.aboutImg} w-[90%] md:w-[50%] h-[50%] md:h-[70%] bg-no-repeat bg-center bg-cover bg-gray-100 z-10 -mt-[35vh] md:mt-0 mr-0 md:mr-9 ml-0 md:-ml-[40vw] rounded-2xl lg:rounded-[30px] `}></div>
      </section>

      <section id="services" className={`${styles.thirdSection} w-full h-[120vh] max-h-full md:max-h-[750px] lg:max-h-full md:h-[60vh] lg:h-[110vh] bg-white flex flex-col-reverse md:flex-row items-center justify-between py-[2em] box-border`}>
        <div data-aos="fade-right" className="w-[90%] md:w-[50%] h-[50%] grid grid-cols-2 gap-x-5 gap-y-5 place-content-center md:h-[70%] bg-transparent z-10 -mt-[35vh] md:mt-0 mr-0 md:ml-9 ml-0 md:-mr-[40vw]">
          <div style={{ backgroundImage: 'url(/images/service1.png)' }} className={`${styles.serviceItem} relative h-[20vh] md:h-[16vh] lg:h-[35vh] bg-cover bg-no-repeat bg-center w-full rounded-[20px]  bg-gray-100`}>
            <button className="absolute top-3 right-3 w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full bg-white flex items-center justify-center">
              <FaChevronRight className="hidden lg:flex" color="black" size={24} />
              <FaChevronRight className="flex lg:hidden" color="black" size={20} />
            </button>
          </div>
          <div style={{ backgroundImage: 'url(/images/service2.png)' }} className={`${styles.serviceItem} relative h-[20vh] md:h-[16vh] lg:h-[35vh] bg-cover bg-no-repeat bg-center w-full rounded-[20px]  bg-gray-100`}>
            <button className="absolute top-3 right-3 w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full bg-white flex items-center justify-center">
              <FaChevronRight className="hidden lg:flex" color="black" size={24} />
              <FaChevronRight className="flex lg:hidden" color="black" size={20} />
            </button>
          </div>
          <div style={{ backgroundImage: 'url(/images/service3.png)' }} className={`${styles.serviceItem} relative h-[20vh] md:h-[16vh] lg:h-[35vh] bg-cover bg-no-repeat bg-center w-full rounded-[20px]  bg-gray-100`}>
            <button className="absolute top-3 right-3 w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full bg-white flex items-center justify-center">
              <FaChevronRight className="hidden lg:flex" color="black" size={24} />
              <FaChevronRight className="flex lg:hidden" color="black" size={20} />
            </button>
          </div>
          <div style={{ backgroundImage: 'url(/images/service4.png)' }} className={`${styles.serviceItem} relative h-[20vh] md:h-[16vh] lg:h-[35vh] bg-cover bg-no-repeat bg-center w-full rounded-[20px]  bg-gray-100`}>
            <button className="absolute top-3 right-3 w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full bg-white flex items-center justify-center">
              <FaChevronRight className="hidden lg:flex" color="black" size={24} />
              <FaChevronRight className="flex lg:hidden" color="black" size={20} />
            </button>
          </div>
        </div>
        <div data-aos="fade-left" className={`${styles.clipleft} w-full md:w-[95%] h-full bg-accent flex flex-col md:flex-row items-center justify-end`}>
          <div className="w-full md:w-1/2 h-full md:h-[70%] bg-transparent flex flex-col items-center md:items-start justify-start pr-0 md:pr-16">
            <h1 className={`${styles.serviceHeading} text-[28px] md:text-[50px] font-bold mt-12 mb-5 md:mt-2 md:mb-5`}>Services</h1>
            <p className={`${styles.servicePara} text-[1em] md:text-[1.15em] lg:text-[1.3em] max-w-[90%] text-center md:text-left  md:max-w-[98%] `}>Zeus specializes in providing high-quality industrial machinery and spare parts, including conveyor systems, cranes, motors, pumps, packaging machines, and more. We offer expert technical consultation, custom machinery solutions, professional installation, and ongoing maintenance services. Our goal is to enhance operational efficiency and reliability across industries, ensuring that your equipment performs optimally with minimal downtime.</p>
          </div>
        </div>
      </section>
      <section id="contactus" className={`${styles.fourthSection} w-full h-[120vh] md:h-[80vh] max-h-[800px] lg:max-h-[800px] bg-transparent bg-map bg-cover md:bg-contain bg-no-repeat bg-right flex items-center justify-center`}>
        <div className="w-full h-full bg-accent_low_op flex flex-col md:flex-row items-center justify-start pt-5 md:pt-0 box-border">
          <div data-aos="fade-right" className={`${styles.mapclip} w-[90%] md:w-[60%] h-1/2 md:h-full bg-gray-100 bg-enquiry bg-no-repeat bg-center bg-cover rounded-3xl md:rounded-none`}></div>
          <form onSubmit={sendEmail} ref={form!} className={`${styles.form} w-full md:w-[40%] lg:w-[30%] h-1/2 md:h-full bg-transparent ml-0 md:-ml-[6em] lg:-ml-[9em] mr-0 md:mr-[6em] lg:mr-[9em] flex flex-col items-center md:items-start justify-start pt-0 md:pt-14 box-border`}>
            <h1 data-aos="fade-up" className={`${styles.enquiry} text-black text-[28px] md:text-[40px] font-bold mb-6`}>Enquiry</h1>
            <input data-aos="fade-up" required placeholder="Name" type="text" name="user_name" className={`${styles.input} ${errorType === "empty" ? "border-2 border-red-500" : "border-none"} w-[90%] md:w-[100%] h-[40px] md:h-[50px] bg-white rounded-lg md:rounded-2xl text-black placeholder:text-gray-300 pl-5 focus:outline-none focus:border-none `} />
            <input data-aos="fade-up" required placeholder="Email" type="email" name="user_email" className={`${styles.input} ${errorType === "empty" ? "border-2 border-red-500" : "border-none"} w-[90%] md:w-[100%] h-[40px] md:h-[50px] bg-white rounded-lg md:rounded-2xl text-black placeholder:text-gray-300 pl-5 mt-3 focus:outline-none focus:border-none `} />
            <textarea
              required
              data-aos="fade-up"
              name="message"
              className={`${styles.textarea} ${errorType === "empty" ? "border-2 border-red-500" : "border-none"} w-[90%] md:w-[100%] min-h-[70px] md:min-h-[130px] mt-5 bg-white scrollbar-hide rounded-lg md:rounded-2xl text-black placeholder:text-gray-300 pl-5 pt-3 focus:outline-none focus:border-none `}
              placeholder="Message"
              style={{ resize: "none" }}
            />
            <button data-aos="fade-left" onClick={sendEmail} className={`${styles.button} ${errorType === "failed" ? "border-2 border-red-500 text-red-500" : "border-none text-black"} w-[130px] h-[45px] my-2 rounded-3xl md:rounded-lg mt-3 mr-5 md:mr-0 self-end bg-black text-white`} type="submit">{buttonTitle}</button>
          </form>
        </div>
      </section>
      <Carousel products={products} />
      <Suppliers />
      <Footer />
    </div >
  );
}
