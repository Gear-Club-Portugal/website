import { useTheme } from '@mui/material/styles';

// Oswald font metrics from the woff file (hhea + OS/2 tables, UPM=1000)
const OSWALD = { ascender: 1193, descender: 289, capHeight: 810, upm: 1000 };

export function useCapHeightOffset(variant = 'h3') {
  const theme = useTheme();
  const { fontSize, lineHeight } = theme.typography[variant];
  const contentAreaRatio = (OSWALD.ascender + OSWALD.descender) / OSWALD.upm;
  const halfLeadingRatio = (lineHeight - contentAreaRatio) / 2;
  const offset = (halfLeadingRatio + (OSWALD.ascender - OSWALD.capHeight) / OSWALD.upm) * fontSize;
  return `${offset}px`;
}
