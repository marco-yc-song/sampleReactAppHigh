const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];


function overFifteen(iParam) {
    return  iParam > 15 ? true : false; 
}


const biggerThan15 = numbers.filter( overFifteen );

// console.log(biggerThan15);


let posts = ['Hi', 'Hello', 'Bye'];

posts = posts.filter( (item, index) => index > 0 );
console.log(posts);
