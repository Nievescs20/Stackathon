module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        skyline:
          "url('https://image.shutterstock.com/image-vector/city-landscape-line-260nw-1298195557.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
