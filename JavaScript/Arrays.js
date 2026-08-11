let arr=[1,2,3,4,5]
console.log(arr);
arr.push(7);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(0);
console.log(arr);
arr.shift();
console.log(arr);

// Joined Array
let name=["inshal", "areeba", "izwa","lubna"];
console.log(name.join(" and "));

// Combined Array
let arr2=[7,8,9,10]
let combined=[...arr, ...arr2];
console.log(combined);

// Foreach
name.forEach(name => {
    return console.log(name);
});

// For of
for (const element of name) {
    console.log(element)
    
}

// Sort
const arr4=[10,100,1,4,7,5,3,2];
arr4.sort((a,b)=>a-b);
console.log(arr4);

// Indexof
let arr3=[1,2,3,4,5,4,6,7,8]
console.log(arr3.indexOf(4));
console.log(arr3.lastIndexOf(4));

// Includes
let numbers=[1,2,3,4,5,6]
console.log(numbers.includes(10));

// Changing 
arr3 [0]=4;
console.log(arr3);
