
const days = ['mon', 'tue', 'wed', 'thurs', 'fri'];

const fnC = (item,index) => `${item} ${index+1}`;

function addIndex(item, index){
   return `${item} ${index+1}`
}

const newDays = days.map( addIndex );

console.log(newDays);