// Basic Arithmatic Operatio
const calculate = (num1, num2, operator) => {
    if (operator === '+') return num1 + num2;
    if (operator === '-') return num1 - num2;
    if (operator === '*') return num1 * num2;
    if (operator === '/') return num1 / num2;
    return "Error: Invalid operator";
}
console.log(calculate(3,5,'/'));
console.log(calculate(3,5,'-'));
console.log(calculate(3,5,'+'));
console.log(calculate(3,5,'*'));


// Default Parameters & Template Literals
const productInfo=(name,price,discount=0)=>{
    return `Product:${name}, Final Price:${price-discount}`;
};
console.log(productInfo("Laptop",500000,5000));
console.log(productInfo("Mouse",20000))

// Hoisting Test 
sayHello();
function sayHello(){
    console.log("Hello!");

}

// Hoisting test with an arrow function
// sayHello1()
// const sayHello1=()=>{
//     console.log("Hello");
// }   
// Error

// Nested Function
function getUserData(){
    return"Inshu";

}
function welcomeUser(){
    let userName= getUserData();
    console.log(`Welcome,${userName}!`);
}
welcomeUser();

// Function Expression & Calculation 
const calculateArea=function(length,width){
    return length*width;
}
console.log(calculateArea(10,5));
console.log(calculateArea(20,4));
console.log(calculateArea(7,3));
