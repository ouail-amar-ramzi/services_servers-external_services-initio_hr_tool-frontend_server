/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './index.html'
  ],
  theme: {
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      colors:{
        "initio-white-primary": "#ECF9FD", 
        "initio-white-secondary": "#CBF3FF", 
        "initio-green-primary": "#0E5465",
        "initio-green-secondary": "#2290AC",
        "initio-green-secondary-light": "#3DB4D7",
        'gradient-green-black' : 'linear-gradient(177deg, #06232A 0%, #0E5465 100%)',
      },
      backgroundSize: {
        "container": "100% 100%",
      },
      backgroundImage: {
        'gradient-green-black' : 'linear-gradient(177deg, #06232A 0%, #0E5465 100%)',
        'gradient-177': 'linear-gradient(177deg, var(--tw-gradient-stops))',
        'gradient-150': 'linear-gradient(150deg, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'button': '0px 7px 10px 0px rgba(6, 35, 42, 0.15)'
      }
    },
    screens: {
      sm: "560px",
      md: "750px",
      lg: "1024px",
      xl: "1300px",
      "2xl": "1480px",
      smmin: { min: "376px", max: "426px" },
    },
  },
  plugins: [],
};