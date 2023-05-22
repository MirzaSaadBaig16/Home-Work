let button = document.querySelector(".button");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let hr = document.querySelector(".hr");
let para = document.querySelector(".para");
let hr2 = document.querySelector(".hr2");
let para2 = document.querySelector(".para2");
let hr3 = document.querySelector(".hr3");
let para3 = document.querySelector(".para3");
let div2 = document.querySelector(".div2");
let div3 = document.querySelector(".div3");
let div4 = document.querySelector(".div4");
let div5 = document.querySelector(".div5");
let div6 = document.querySelector(".div6");

button.addEventListener("click", () => {
  hr.classList.toggle("uni");
  para.classList.toggle("uni");
  div2.classList.toggle("uni");
});

button2.addEventListener("click", () => {
  hr2.classList.toggle("uni");
  para2.classList.toggle("uni");
  div4.classList.toggle("uni");
});
button3.addEventListener("click", () => {
  hr3.classList.toggle("uni");
  para3.classList.toggle("uni");
  div6.classList.toggle("uni");
});