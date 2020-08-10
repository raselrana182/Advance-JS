let pakhi;
function add(num1 , num2){
    console.log(num1 + num2);   //In this function there are two case for undefined (1) can't return anything and (2) which thing is return can't defined.
}

function add(num1,num2){
    console.log(num1,num2);
}
const result = add(12);          //In this function shows undefined because there is no value of the second parameter.
console.log(result);

const premik = {name: "smart dude", phone: 126378};
console.log(premik.gf);          //There is no gf property that's why it shows undefined.