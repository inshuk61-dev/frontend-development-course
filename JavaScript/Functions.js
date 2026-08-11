// Functions
function sum(num1,num2) {
    console.log(num1+num2);

}
sum(3,6)

// Vriable in function
function sum1(num1,num2){
    return num1 + num2;
}
let numbers=sum(6,9)

// Arrow function
const add = (a ,b)=>a+b;
console.log(add(6,6));

// Arrow function with return
const add1 = (c,d)=>{
    return(c+d);
}
console.log(add1(5,9));

// without return undefined value
const add2 = (e,f)=>{
         (e+f);
}
console.log(add2(5,9));

// Function within a function / Call back
function payment(amount) {
    console.log(`User Pay ${amount}`); 
}

function orderPlaced() {
    payment(7000); 
    return "User paid the bill, prepare meal";
}

console.log(orderPlaced());

// 3 NUMBERS
function sum4(num1,num2,num3=0) {
    console.log(num1+num2+num3);

}
sum4(3,6,8)
