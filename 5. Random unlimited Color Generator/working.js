// Working Logic behind the project.

const hex = "0123456789ABCDEF";

function colorGenerator() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
}

function colorSetter() {
  let result = colorGenerator();
  document.body.style.backgroundColor = result;
}

let interval;

document.querySelector("#start").addEventListener("click", (e) => {
  interval = setInterval(colorSetter, 2000);
});

document.getElementById("stop").addEventListener("click", (e) => {
  clearInterval(interval);
});
