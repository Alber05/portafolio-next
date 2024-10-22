/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        qhd: '2560px', // 2560 x 1440 (WQHD)
        uhd: '3840px' // 3840 x 2160 (4K)
      },
      colors: {
        customCyan: '#45B7F5',
        customGray: '#F0FFFF',
        customNavyBlue: '#171C33',
        'custom-light-blue': 'rgba(69, 183, 245, 0.4)'
      },
      backgroundImage: {
        bodyBackground: "url('assets/images/bodyBackground.webp')"
      },
      animation: {
        post: 'postAnimation 3s infinite alternate-reverse'
      },
      keyframes: {
        postAnimation: {
          '0%': {
            transform: 'translateX(0) translateY(0)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateX(100%) translateY(-120%)',
            opacity: '1'
          }
        }
      },
      boxShadow: {
        'custom-black': '3px 3px 3px 1px rgba(0, 0, 0, 0.3)'
      },
      dropShadow: {
        'custom-blue': '1px 2px 8px rgba(69, 183, 245, 0.9)'
      }
    }
  }
}
