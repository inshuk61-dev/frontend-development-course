// Else if 
let age = 12;
if (age < 13) {
    console.log("Child")
}
else if (age >= 13 && age <= 19) {
    console.log("Teenager")
}
else if (age >= 20 && age <= 59) {
    console.log("Adult")
}
else {
    console.log("Senior Citizen")
}

// Nested If
let username = "admin";
let password = "12345";

if (username === "admin") {
    if (password === "1235") {
        console.log("login successful");
    }
    else {
        console.log("wrong password")
    }
}
else {
    console.log("Wrong username")
}

// Age + Permission
let AGE = 18;
let CNIC = 1234567890;
if (AGE >= 18) {
    if (CNIC === 123457890) {
        console.log("You can enter")
    }
    else {
        console.log("Your CNIC is invalid")
    }
}
else {
    console.log("Inappropriate message")
}

// Number + Divisibility
let number = -6;
if (number > 0) {
    if (number % 2 === 0) {
        console.log("Positive Even Number")
    }
    else {
        console.log("Positive Odd Number")
    }
}
else {
    console.log("Number is not positive")
}


// FOR LOOP  /EVEN NUMBER
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }

}

// Sum of numbers
let sum = 0;
for (let g = 1; g <= 10; g++) {
    sum += g;
}
console.log(sum);

// Array + For OF LOOP
let fruits=["Apple" , "Banana", "Mango", "Orange"]
for (let element of fruits) {
    console.log(element+" is fruit");
    
}

// Count Even Numbers
const num = [12, 16,18,7,4,19,8,3,10];
let evenCount = 0;
for (const element of num){
    if(element % 2===0){
        evenCount++;
    }
}
console.log("Total even number:" , evenCount);

// Find the largest Number
let No=[15,42,7,89,23,56];
let largest=No[0];
for (let element of No) {
    if (element > largest){
        largest=element;
    }
    
}
console.log("The largest number is:", largest);

// Students Who Passed
const students=[
    {name:"Ali" , marks:72},
    {name:"Sara" , marks:45},
    {name:"Ayesha" , marks:92},
    {name:"Hamza" , marks:38},
    {name:"Zara" , marks:65},
]
 
for (const element of students) {
    if(element.marks>=50){
        console.log(element.name + " Passed")
    }
    
}

