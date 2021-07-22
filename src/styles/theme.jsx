// font
const fontFamily = "'Lato', sans-serif";

// font-size
const textSize = '1rem';
const h1Size = '2rem';
const h2Size = '1.5rem';
const h3Size = '1.2rem';

// devices
const size = {
  mobileS: '375px',
  mobile: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

const theme = {
  fontFamily,
  textSize,
  h1Size,
  h2Size,
  h3Size,
  device,
};

export default theme;
