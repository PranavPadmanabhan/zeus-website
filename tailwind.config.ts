import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent:'rgba(235, 207, 203,0.5)',
        accent_low_op:'rgba(235, 207, 203,0.3)',
      },
      backgroundImage:{
        map:'url(/images/map.png)',
        enquiry:'url(/images/enquiry.jpeg)'
      },
      fontFamily:{
        poppins:["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
