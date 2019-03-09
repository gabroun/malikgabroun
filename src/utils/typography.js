import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: '1.5',
  headerFontFamily: ['Rambla'],
  bodyFontFamily: ['Ralway'],
});

//output css as string
typography.toString();

typography.injectStyles();
export default typography;
