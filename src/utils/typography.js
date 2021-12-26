import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: "1.9",
  headerFontFamily: ["Fira Mono"],
  bodyFontFamily: ["Fira Mono"],
});

//output css as string
typography.toString();

typography.injectStyles();
export default typography;
