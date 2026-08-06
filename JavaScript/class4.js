// Ternary Operator

let isloggined="false"
isloggined ?
console.log("log in"):

console.log("not log in")

// Nested if else
    let marks="49";
if (marks>=80 && marks<=100){
    console.log("A")
}
else if (marks>=70 && marks<=79){
    console.log("B")
}
else if (marks>=60 && marks<=69){
    console.log("C")
}
else {
    console.log("Fail")
}

// Example 2
let number1=1;
let number2=7;
let number3=5;

if (number2%3===0 && number3%5===0){
    console.log("All numbers are divisible")
}
else if (number2%3===0){
    console.log("Nmuber2 is divisible by 3")
}
else if (number3%5===0){
    console.log("Number3 is divisible by 5")
}
else{
    console.log("Neither number2 nor number3 is divisible by 3 and 5")
}

// Switch Condition

let Days=9;
switch (Days) {
    case 1:
    console.log("Monday");
    break;
    case 2:
    console.log("Tuesday");
    break;
    case 3:
    console.log("Wednesday");
    break;
    case 4:
    console.log("Thursday");
    break;
    case 5:
    console.log("Friday");
    break;
    case 6:
    console.log("Saturday");
    break;
    case 7:
    console.log("Sunday");
    break;
default:
    console.log("invalid input");
    break;
}