/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "parallax": "url('/assets/parallax/parallax-logo.svg')",
        "parallax-mobile": "url('/assets/parallax/parallax-mobile.svg')",
        "parallax-polaroid": "url('/assets/parallax/parallax-polaroid.svg')",
        "parallax-polaroid-mobile": "url('/assets/parallax/parallax-polaroid-mobile.svg')",
        "parallax-contact": "url('/assets/parallax/parallax-contact.svg')",
        "parallax-contact-mobile": "url('/assets/parallax/parallax-contact-mobile.svg')",
        "parallax-gallery": "url('/assets/parallax/parallax-gallery.svg')",
        "parallax-gallery-mobile": "url('/assets/parallax/parallax-gallery-mobile.svg')",
        "parallax-prices": "url('/assets/parallax/parallax-prices.svg')",
        "parallax-prices-mobile": "url('/assets/parallax/parallax-prices-mobile.svg')",
      },
      width: {
        '600px': '600px'
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
    },
  },
  plugins: [],
};
