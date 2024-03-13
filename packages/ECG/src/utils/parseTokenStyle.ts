import {
  getFontSizeByWindowHeight,
  getFontSizeByWindowWidth,
  moderateScale,
  moderateVerticalScale,
} from './../style/theme';

/**
 * Calculates a font size relative to the width of the window.
 * 
 * @param size - A string representing the size to be parsed.
 * @returns The calculated font size based on window width.
 */
export const gpsw = (size: string): number => {
  const parsedSize = parseInt(size, 10);
  if (isNaN(parsedSize)) {
    throw new Error("Invalid size input for gpsw. Size must be a valid number.");
  }
  return getFontSizeByWindowWidth(parsedSize);
};

/**
 * Calculates a font size relative to the height of the window.
 * 
 * @param size - A string representing the size to be parsed.
 * @returns The calculated font size based on window height.
 */
export const gpsh = (size: string): number => {
  const parsedSize = parseInt(size, 10);
  if (isNaN(parsedSize)) {
    throw new Error("Invalid size input for gpsh. Size must be a valid number.");
  }
  return getFontSizeByWindowHeight(parsedSize);
};


export const gpmsw = (size: string | number) => {
  const parsedSize = typeof size === 'string' ? parseInt(size) : size;
  return moderateScale(parsedSize);
};

export const gpmsh = (size: string | number) => {
  const parsedSize = typeof size === 'string' ? parseInt(size) : size;
  return moderateVerticalScale(parsedSize);
};