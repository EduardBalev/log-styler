const { colorText, bgColorText, colorize } = require("./index");

console.log(colorText("This is red text", "red"));
console.log(colorText("This is bold green text", "green", "bold"));
console.log(colorText("This is italic blue text", "blue", "italic"));

console.log(bgColorText("This text has a blue background", "blue"));
console.log(bgColorText("This text has a yellow background", "yellow"));

console.log(
  colorize("This is bright yellow text on a black background", {
    color: "brightYellow",
    bgColor: "black",
    style: "bold",
  }),
);
console.log(
  colorize("This is strikethrough text", {
    color: "cyan",
    style: "strikethrough",
  }),
);
console.log(
  colorize("This is inverted text", {
    color: "green",
    bgColor: "black",
    style: "inverse",
  }),
);
console.log(colorText("Invalid color: purple", "purple")); // Warning will be displayed
