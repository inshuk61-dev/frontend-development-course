// Even or Odd
let a = 3
    ;
if (a % 2 === 0) {
    console.log("Even Number")
}
else {
    console.log("Odd Number")
}

// Ternary Operator
let isloggined = false

isloggined ?
    console.log("User is logged in") :
    console.log("User is not logged in")


// Switch Condition
let fruit = "Mango";
switch (fruit) {
    case "Apple":
        console.log("Red");
        break;
    case "Mango":
        console.log("Yellow");
        break;
    case "Orange":
        console.log("Orange");
        break;
    case "Grapes":
        console.log("Purple");
        break;

    default:
        console.log("Color Not Found")
        break;
}

// Grade

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

// ATM Withdrwal
let withdraw=20000;
if (withdraw<20000){
    console.log("Transition Successful")
}
else if (withdraw===20000){
    console.log("Daily Limit Exceed")
}
else {
    console.log("Insufficient Amount")
}

