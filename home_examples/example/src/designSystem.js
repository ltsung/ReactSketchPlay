export const colors = {
  White: '#FFF',
  Haus: '#F3F4F4',
  Night: '#676',
  Sur: '#96DBE4',
  'Sur a11y': '#24828F',
  Peach: '#EFADA0',
  'Peach a11y': '#E37059',
  Pear: '#93DAAB',
  'Pear a11y': '#2E854B',
  Blue: '#3399FF',
  Shadow: '#EAEAEA'
};

const typeSizes = [80, 48, 36, 24, 20, 16];

export const spacing = 20;
export const mini_spacing = 20;


const fontFamilies = {
  display: 'Helvetica Neue',
  body: 'Helvetica Neue',
};

const fontWeights = {
  regular: 'regular',
  bold: 'bold',
};

export const fonts = {
  Headline: {
    color: colors.Night,
    fontSize: typeSizes[0],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 80,
  },
  'Title 1': {
    color: colors.Night,
    fontSize: typeSizes[1],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 48,
    marginBottom: 40
  },
  'Title 2': {
    color: colors.Night,
    fontSize: typeSizes[3],
    fontFamily: fontFamilies.display,
    fontWeight: fontWeights.bold,
    lineHeight: 36,
  },
  'Title 3': {
    color: colors.Night,
    fontSize: typeSizes[4],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
  },
  Body: {
    color: colors.Night,
    fontSize: typeSizes[5],
    fontFamily: fontFamilies.body,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
    marginBottom: 24,
  },
};

export default {
  colors,
  fonts,
  spacing,
};

export type DesignSystem = {
  fonts: any,
  colors: { [key: string]: string },
};
