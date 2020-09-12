module.exports = {
  future: { purgeLayersByDefault: true, removeDeprecatedGapUtilities: true },
  purge: ["./src/components/**/*.js", "./src/pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        black: "#0C0F0A",
        primary: "#FF206E",
        secondary: "#41EAD4",
        tertiary: "#FBFF12",
      },
    },
  },
  variants: {},
  plugins: [],
};
