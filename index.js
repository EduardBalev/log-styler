/**
 * Log Styler Library
 * Provides methods to color text and backgrounds in the console.
 */

const styles = {
  reset: "\x1b[0m", // Reset all styles
  bold: "\x1b[1m", // Bold text
  italic: "\x1b[3m", // Italic text
  underline: "\x1b[4m", // Underlined text
  blink: "\x1b[5m", // Blinking text
  strikethrough: "\x1b[9m", // Strikethrough text
  inverse: "\x1b[7m", // Inverted colors
};

const colors = {
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  brightBlack: "\x1b[30;1m",
  brightRed: "\x1b[31;1m",
  brightGreen: "\x1b[32;1m",
  brightYellow: "\x1b[33;1m",
  brightBlue: "\x1b[34;1m",
  brightMagenta: "\x1b[35;1m",
  brightCyan: "\x1b[36;1m",
  brightWhite: "\x1b[37;1m",
};

const bgColors = {
  black: "\x1b[40m",
  red: "\x1b[41m",
  green: "\x1b[42m",
  yellow: "\x1b[43m",
  blue: "\x1b[44m",
  magenta: "\x1b[45m",
  cyan: "\x1b[46m",
  white: "\x1b[47m",
  brightBlack: "\x1b[40;1m",
  brightRed: "\x1b[41;1m",
  brightGreen: "\x1b[42;1m",
  brightYellow: "\x1b[43;1m",
  brightBlue: "\x1b[44;1m",
  brightMagenta: "\x1b[45;1m",
  brightCyan: "\x1b[46;1m",
  brightWhite: "\x1b[47;1m",
};

/**
 * Validate the provided style and return the corresponding ANSI code.
 * @param {string} style - The style to validate.
 * @returns {string} - The ANSI code for the style or an empty string if invalid.
 */
const validateStyle = (style) => {
  if (!styles[style]) {
    return "";
  }
  return styles[style];
};

/**
 * Validate the provided color and return the corresponding ANSI code.
 * @param {string} color - The color to validate.
 * @returns {string} - The ANSI code for the color or the reset code if invalid.
 */
const validateColor = (color) => {
  if (!colors[color]) {
    return "";
  }
  return colors[color];
};

/**
 * Validate the provided background color and return the corresponding ANSI code.
 * @param {string} bgColor - The background color to validate.
 * @returns {string} - The ANSI code for the background color or an empty string if invalid.
 */
const validateBgColor = (bgColor) => {
  if (!bgColors[bgColor]) {
    return "";
  }
  return bgColors[bgColor];
};

/**
 * Color the text with the specified color and style.
 * @param {string} text - The text to color.
 * @param {string} color - The color to apply.
 * @param {string} [style] - Optional style to apply.
 * @returns {string} - The colored text.
 */
const colorText = (text, color, style) => {
  const styleCode = validateStyle(style);
  const colorCode = validateColor(color);
  return `${styleCode}${colorCode}${text}${styles.reset}`;
};

/**
 * Color the background of the text with the specified background color.
 * @param {string} text - The text to color.
 * @param {string} bgColor - The background color to apply.
 * @returns {string} - The text with the colored background.
 */
const bgColorText = (text, bgColor) => {
  const bgColorCode = validateBgColor(bgColor);
  return `${bgColorCode}${text}${styles.reset}`;
};

/**
 * Color the text with the specified options.
 * @param {string} text - The text to color.
 * @param {Object} options - The options for coloring.
 * @param {string} [options.color] - The color to apply.
 * @param {string} [options.bgColor] - The background color to apply.
 * @param {string} [options.style] - The style to apply.
 * @returns {string} - The colored text based on the options provided.
 */
const colorize = (text, options = {}) => {
  const { color, bgColor, style } = options;
  const styleCode = validateStyle(style);
  const colorCode = validateColor(color);
  const bgColorCode = validateBgColor(bgColor);
  return `${styleCode}${colorCode}${bgColorCode}${text}${styles.reset}`;
};

module.exports = { colorText, bgColorText, colorize };
