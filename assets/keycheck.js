const Cookies = require('js-cookie');

const pressed = [];

const secretCode = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";

window.addEventListener("keyup", e => {
  pressed.push(e.key);
  pressed.splice(
    -secretCode.length - 1,
    pressed.length - secretCode.length
  );

  console.log(pressed.join(""));
  if (pressed.join("").includes(secretCode)) {
    Cookies.set("superSayen", "true");
    window.location.reload();
  }
});