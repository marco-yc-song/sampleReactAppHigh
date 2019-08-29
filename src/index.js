
//button click listener - vanila js
const button = document.querySelector('.btn1');

button.addEventListener("click", (event) => console.log(event));

//default value = Human
const sayHello = (name = "Human") => `Hello ${name}`;
const nicolas = sayHello('Nicolas');
console.log(nicolas);

//1.3 Object
const human = {
    name:"Nike",
    lastName:"Boko",
    nationality:"Korean",

    favFood:{

        breakfast:"Burger",
        lunch:"Kimchi",
        dinner:"Steak"

    }

}


//아래 두 코드는 동일하다!

// const name = human.name;
// const lastName = human.lastName;
// const difName = human.nationality;

const {
    name, 
    lastName, 
    nationality:difName, 
    favFood:{dinner,lunch,breakfast} 
} = human;

console.log(name,lastName, difName, dinner, lunch, breakfast);