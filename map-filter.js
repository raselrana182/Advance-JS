const numbers = [2,3,4,5,6];
const result = numbers.map(x=> x*x);
console.log(result);

const result1 = numbers.map(function(element){
    return element * element;
})
console.log(result1);

const bigger = numbers.filter(x => x%2==0);
console.log(bigger);