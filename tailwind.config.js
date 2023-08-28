/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        c_gradient:
          'linear-gradient(to left, hsl(192, 70%, 51%), hsl(136, 65%, 51%))',
        c_gradient_hover:
          'linear-gradient(to left, hsl(192, 70%, 70%), hsl(136, 65%, 70%))',
        c_gradient_bw:
          'linear-gradient(to bottom, hsla(233, 26%, 24%,100%)0%, hsla(0, 0%, 98%,20%)80%)',
        hero_desktop_bg: "url('/src/assets/images/bg-intro-desktop.svg')",
        hero_mobile_bg: "url('/src/assets/images/bg-intro-mobile.svg')",
        hero_img:"url('/src/assets/images/image-mockups.png')"
      },

      colors: {
        c_very_light_gray: 'hsl(0, 0%, 98%)',
        c_light_grayish_blue: 'hsl(220, 16%, 96%)',
        c_grayish_blue: 'hsl(233, 8%, 62%)',
        c_dark_blue: 'hsl(233, 26%, 24%)',
      },
    },
  },
  plugins: [],
};
