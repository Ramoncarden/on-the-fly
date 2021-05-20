module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'kitchen-img':
          "url('/Users/ramoncardenas/SpringBoard_2/on-the-fly/src/modern-kitchen-interior-background-template-cartoon-dinner-room-with-furniture/131.jpg')",
        'kitchen-orange':
          "url('/Users/ramoncardenas/SpringBoard_2/on-the-fly/src/modern-kitchen-interior-background-template-cartoon-dinner-room-with-furniture/kitchen-orange-228.jpeg')",
        'kitchen-utensils':
          "url('/Users/ramoncardenas/SpringBoard_2/on-the-fly/src/modern-kitchen-interior-background-template-cartoon-dinner-room-with-furniture/kitchen-utensils.png')",
        'form-background':
          "url('/Users/ramoncardenas/SpringBoard_2/on-the-fly/src/modern-kitchen-interior-background-template-cartoon-dinner-room-with-furniture/andrej-lisakov-fGZ2x8wFxC0-unsplash.jpg')"
      }),
      fontFamily: {
        courgette: [ '"Courgette"', 'cursive' ],
        ptSans: [ '"PT Sans"', 'sans-serif' ]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
