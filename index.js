const buttonContainer = document.getElementsByClassName("buttons-container")[0];
const screen = document.getElementById("screen");
const arrOfButtons = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "*",
  "/",
  "%",
];
const myButtons = [
  "%",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
];

for (let i = 0; i < 15; i++) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.innerHTML = myButtons[i];
  buttonContainer.insertAdjacentElement("afterbegin", button);
}
const buttons = buttonContainer.children;

for (let i = 0; i < 15; i++) {
  buttons[i].addEventListener("click", function (e) {
    const screenContent = screen.value;
    screen.value = screenContent + arrOfButtons[i];
  });
}

document.getElementById("evaluate").addEventListener("click", () => {
  const screenContent = screen.value;
  try {
    screen.value = eval(screenContent);
  } catch (e) {
    alert("enter a valid expression");
    screen.value = "";
  }
});

document.getElementById("clear").addEventListener("click", () => {
  screen.value = "";
});
