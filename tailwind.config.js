module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem'
    },
    screens: {
      'xsm': [{ 'min': '320px', 'max': '639px' }],
      'sm': [{ 'min': '640px', 'max': '767px' }],
      'md': [{ 'min': '768px', 'max': '1023px' }],
      'xmd': [{ 'min': '835px', 'max': '1099px' }],
      'lg': [{ 'min': '1024px', 'max': '1279px' }],
      'xl': [{ 'min': '1280px', 'max': '1535px' }],
      '2xl': {'min': '1536px'}
    },
    extend: {
      colors: {
        primarybtn: '#2B65BB',
        primarybtnhover: '#306FCC',
        secondarybtn: '#C25039',
        secondarybtnhover: '#D2563D',
        tertiarybtn: '#2ACB91',
        tertiarybtnhover: '#25B782',
        textcolour: '#2B65BB',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',

        style: '0 10px 10px 0 rgba(73, 171, 95, 0.35)',
        stylemobile: '0 0 10px 2px rgba(73, 171, 95, 1.0)',
        cardavatar: '0 10px 10px 0 rgba(73, 171, 95, 0.35)',
        stylebar: '0 -10px 10px 0 rgba(73, 171, 95, 0.35)',
        stylebutton: '0 5px 5px 2px rgba(73, 171, 95, 0.20)',
        iconinformation: '0 8px 8px 0 rgba(0, 0, 0, 0.15)',
        marketingcards: '4px 0 10px 0 rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        Informationcards: '100px',
      },
      fontFamily: {
        prompt: "'Prompt', sans-serif",
        poppins: "'Poppins', sans-serif",
        exo: "'Exo', sans-serif",
      }
    },
  },

  variants: {
    extend: {
      textColor: ['hover', 'active'],
      backgroundColor: ['active', 'focus', 'hover'],
      transitionProperty: ['hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce'],
      transform: ['hover', 'focus'],
      opacity: ['disabled'],
    },
  },
  plugins: [

  ],
};
