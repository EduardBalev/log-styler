# Console Color Library

A simple and flexible library for coloring text and backgrounds in the console using ANSI escape codes. This library allows developers to easily add color and style to their console output, enhancing the user experience.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
  - [colorText](#colortext)
  - [bgColorText](#bgcolortext)
  - [colorize](#colorize)
- [Examples](#examples)
- [License](#license)
- [Contributing](#contributing)

## Features

- Supports multiple text colors and background colors.
- Provides various text styles: bold, italic, underline, strikethrough, and more.
- Simple and intuitive API.

## Installation

You can install the library via npm. Run the following command:

```bash
npm install сonsole-styler
```

## Usage
To use the library, require it in your JavaScript file:

```js
const { colorText, bgColorText, colorize } = require('сonsole-styler');
```

## API Reference

### `colorText(text, color, [style])`

Colors the text with the specified color and optional style.

- __Parameters__:
  - `text` (string): The text to color.
  - `color` (string): The color to apply (e.g., 'red', 'green').
  - `style` (string, optional): The style to apply (e.g., 'bold', 'italic').
- __Returns__: A string with the colored text.

### `bgColorText(text, bgColor)`

Colors the background of the text with the specified background color.

- __Parameters__:
  - `text` (string): The text to color.
  - `bgColor` (string): The background color to apply (e.g., 'blue', 'yellow').
- __Returns__: A string with the text and colored background.

### `colorize(text, options)`

Colors the text with the specified options.

- __Parameters__:
  - `text` (string): The text to color.
  - `options` (object): The options for coloring:
  - `color` (string): The color to apply.
  - `bgColor` (string): The background color to apply.
  - `style` (string): The style to apply.
- __Returns__: A string with the colored text based on the options provided.

## Examples

Here are some examples demonstrating how to use the library:

### Basic Color Usage

```js
const { colorText } = require('сonsole-styler');

console.log(colorText('This is red text', 'red'));
console.log(colorText('This is bold green text', 'green', 'bold'));
console.log(colorText('This is italic blue text', 'blue', 'italic'));
```

### Background Color Usage

```js
const { bgColorText } = require('сonsole-styler');

console.log(bgColorText('This text has a blue background', 'blue'));
console.log(bgColorText('This text has a yellow background', 'yellow'));
```

### Using `colorize`

```js
const { colorize } = require('сonsole-styler');

console.log(colorize('This is bright yellow text on a black background', { color: 'brightYellow', bgColor: 'black', style: 'bold' }));
console.log(colorize('This is strikethrough text', { color: 'cyan', style: 'strikethrough' }));
console.log(colorize('This is inverted text', { color: 'green', bgColor: 'black', style: 'inverse' }));
```

### Handling Invalid Colors

The library will issue warnings for unsupported colors or styles:

```js
console.log(colorText('Invalid color: purple', 'purple'));
```

## License

This project is licensed under the [MIT License](https://en.wikipedia.org/wiki/MIT_License) - see the LICENSE file for details.

## Contributing
Contributions are welcome! If you have suggestions for improvements or find bugs, please open an issue or submit a pull request.

- Fork the repository.
- Create your feature branch: `git checkout -b feature/AmazingFeature`
- Commit your changes: `git commit -m 'Add some amazing feature'`
- Push to the branch: `git push origin feature/AmazingFeature`
- Open a pull request.

Thank you for considering contributing to this project!
