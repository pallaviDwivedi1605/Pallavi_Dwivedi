import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
          "primary": "rgba(255,0,65,1)"
         
      },
      borderColor:{
        "primary": "rgba(255,0,65,1)"
      },
      textColor:{
          "primary": "rgba(255,0,65,1)"
          
      },
      backgroundImage:{
         'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow:{
        "white-shadow": "8px 5px 35px #93B1A6",
        "top-shadow": "-1px 0px 10px #5C5470"
      }
    },
  },
  plugins: [],
}
export default config
