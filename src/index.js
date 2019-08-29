
//기본적인 클래스 생성 및 상속하기
class Human {


    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }

}

class Baby extends Human{

    cry(){
        console.log('wassssss');
    }

    sayName(){
        console.log(`I'm ${this.name} ${this.lastName}`);

    }

}

const nico = new Human('Nucj', "thos");

const myBaby = new Baby('jus', 'das');

// console.log(nico);
console.log(myBaby.cry(), myBaby.sayName() );