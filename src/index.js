const days = ['Mon', 'Tue', 'Wed' ];
const otherDays = ['Thu', 'Fri','Sat'];

//spread 연산자를 이용하면 배열 분해 가능
const allDays =[ ...days ,...otherDays];

console.log(allDays);

const ob = {

    first:'Hi',
    second:'Hello'
}

const ab = {
    third:'bye'
}

//spread 연산자를 통한 객체 아이템 접근
const two = {...ob,...ab};
console.log(two);