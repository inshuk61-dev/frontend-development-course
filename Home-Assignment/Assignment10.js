//  Questin 1

const car ={
    brand: "Toyota",
    model:"Corolla",
    year:2025,
    getDetails: function(){
        return   `${this.year} ${this.model} ${this.brand}`;
    }

} ;

console.log(car.getDetails());

// Question 2

const person = {
    nmae:"Inshal",
    id:101,
 address:{
    city:"Islamabad",
    country:"Pakistan"
}
};
const city =structuredClone(person);
city.address.city="Karachi";
console.log(person);
console.log(city);

// Question 3
const products=[{
    name:"Laptop",
    price:50000,
    inStock:true
}, {
    name:"Phone",
    price:30000,
    inStock:false

}
, {
    name:"Tablet",
    price:40000,
    inStock:true

}
, {
    name:"Computer",
    price:1000000,
    inStock:false

}

]

const availableProducts=products.filter(products=> products.inStock===true)
.map(products=>products.name);

console.log(availableProducts)

// Question 4

let scores =[45,60,75,90];
let graceMarks=scores.map(scores=>scores + 5);
console.log(graceMarks)


// Question 5
let employes=[
    {name:"Ali",
        salary:50000
    },
    {name:"Sara",
        salary:55000
    },
    {name:"Alishba",
        salary:40000
    },
    {name:"Fatima",
        salary:75000
    },

]
 
let salaries=employes.map(employee=>employee.salary);
let totalSalary=salaries.reduce((sum,salary)=>sum + salary, 0);
console.log(salaries);
console.log(totalSalary);