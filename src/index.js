
//button click listener - vanila js
const button = document.querySelector('.btn1');

button.addEventListener("click", (event) => console.log(event));

//default value = Human
const sayHello = (name = "Human") => "Hello " + name;
const nicolas = sayHello('Nicolas');

console.log(nicolas);
