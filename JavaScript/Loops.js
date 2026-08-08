// For loop
// for (let i=0; i<10; i++){
//     console.log(i);
// }

// // //  While loop
// let i=0;
// while (i<=10){
//     console.log(i*5);
//     i++;
// } 

// //  Do While Loop
// let s=0;
// do {
//     console.log("Inshal");
//     s++;
// } while (s>0);

// For Of loop
const marks=[
    {name:"fatima" , marks:50},
    {name:"inshal" , marks:30},
    {name:"lubna", marks:80}
]

for (const element of marks) {
    if (element.marks>=50){
        console.log(element.name);
    }
} 


// Only Even Numbers
let i=0;
while (i<=20){
    if (i%2===0){
    console.log(i);}
    i++;

}

// Backword Counting
let g =5;
do {
    console.log(g);
    g--;
}
while(g>=0);


// FOR OF LOOP WITH ARRAY
let friends=[
    "Izwa",
    "Lubna",
    "Shahmeer",
    "Areeba"
] 
for (let name of friends) {
    console.log(name+" is my friend");
    
}

// For In loop
const product ={
    Title:"Laptop",
    price:130,
    Category:"electronics",
    Availibilty:"In stock"
}
for (const key in product) {
    console.log(key+ ":" +product[key])
    
    
}