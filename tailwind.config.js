module.exports = {
  future: { purgeLayersByDefault: true, removeDeprecatedGapUtilities: true },
  purge: {
    content: ["./src/components/**/*.js", "./src/pages/**/*.js"],
    options: {
      whitelist: ["antialiased", "bg-black", "text-white"],
    },
  },
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
