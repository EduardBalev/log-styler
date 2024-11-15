/**
 * Validate the provided style and return the corresponding ANSI code.
 * @param style - The style to validate.
 * @returns The ANSI code for the style or an empty string if invalid.
 */
declare function validateStyle(style: string): string;

/**
 * Validate the provided color and return the corresponding ANSI code.
 * @param color - The color to validate.
 * @returns The ANSI code for the color or the reset code if invalid.
 */
declare function validateColor(color: string): string;

/**
 * Validate the provided background color and return the corresponding ANSI code.
 * @param bgColor - The background color to validate.
 * @returns The ANSI code for the background color or an empty string if invalid.
 */
declare function validateBgColor(bgColor: string): string;

/**
 * Color the text with the specified color and style.
 * @param text - The text to color.
 * @param color - The color to apply.
 * @param style - Optional style to apply.
 * @returns The colored text.
 */
declare function colorText(text: string, color: string, style?: string): string;

/**
 * Color the background of the text with the specified background color.
 * @param text - The text to color.
 * @param bgColor - The background color to apply.
 * @returns The text with the colored background.
 */
declare function bgColorText(text: string, bgColor: string): string;

/**
 * Color the text with the specified options.
 * @param text - The text to color.
 * @param options - The options for coloring.
 * @param options.color - The color to apply.
 * @param options.bgColor - The background color to apply.
 * @param options.style - The style to apply.
 * @returns The colored text based on the options provided.
 */
declare function colorize(
  text: string,
  options?: {
    color?: string;
    bgColor?: string;
    style?: string;
  },
): string;

export { colorText, bgColorText, colorize };
