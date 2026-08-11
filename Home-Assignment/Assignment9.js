// Spread and Combine Challenge
let arr=["Islamabad","Karachi","Peshawar"];
let arr2=["Pakistan","India","Turkey"];
let travelList=[...arr, ...arr2];
console.log(travelList.join(">"));

// The sort() Number Trap
let numbers=[50,10,5,100,20]
numbers.sort();
console.log(numbers);
numbers.sort((a,b)=>a-b);
console.log(numbers);

// Loop Comparison (forEach vs for..of)
let students=["Ali","Ahmed","Asad"]
students.forEach(students => {
     console.log(students);
    
});

for (const element of students) {
    console.log(element)
    
}

// Search and Index Check
let fruits=["apple","mangoes","banana","apple","orange"]
console.log(fruits.includes("apple"));
console.log(fruits.indexOf("apple"));
console.log(fruits.lastIndexOf("apple"));


// Refrence vs Value Check 
let scores=[10,20,30];
console.log(scores)
let backupScores=scores;
backupScores[0]=99;
console.log(backupScores);
console.log(scores);
