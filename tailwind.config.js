/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      sans: ['Hanken Grotesk'],
    },

    extend: {
      screens: {
        mob: '375px',
      },

      // Custom Classes for Frontend_Mentor Project
      colors: {
        // Bar Colors
        LightRed: ['hsl(0, 100%, 67%)'],
        OrangeyYellow: ['hsl(39, 100%, 56%)'],
        GreenTeal: ['hsl(166, 100%, 37%)'],
        CobaltBlue: ['hsl(234, 85%, 45%)'],

        // Neutral Colors
        FMWhite: ['hsl(0, 0%, 100%)'],
        Paleblue: ['hsl(221, 100%, 96%)'],
        Lightlavender: ['hsl(241, 100%, 89%)'],
        Darkgrayblue: ['hsl(224, 30%, 27%)'],

        // Gradients Colors

        // Background Gradients
        Light_slate_blue: ['hsl(252, 100%, 67%)'],
        Light_royal_blue: ['hsl(241, 81%, 54%)'],

        // Circle Gradients
        Violet_blue: ['hsla(256, 72%, 46%, 1)'],
        Persian_blue: ['hsla(241, 72%, 46%, 0)'],
      },
    },
  },
  plugins: [],
};
