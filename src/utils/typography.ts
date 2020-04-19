export type spacing = {
  _1: number;
  _2: number;
  _3: number;
  _4: number;
  _5: number;
  _6: number;
  _8: number;
  _10: number;
  _12: number;
  _16: number;
};

export type typographyType = {
  sizes: {
    header: number;
    label: number;
  };
  spacing: spacing;
};
const typography: typographyType = {
  sizes: {
    header: 17,
    label: 15,
  },
  spacing: {
    _1: 4,
    _2: 8,
    _3: 12,
    _4: 16,
    _5: 20,
    _6: 24,
    _8: 32,
    _10: 40,
    _12: 48,
    _16: 64,
  },
};
export default typography;
