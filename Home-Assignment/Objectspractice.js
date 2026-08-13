const student={
    name:"Inshal",
    age:20,
    marks:99
}
console.log(student)
console.log(student.name)
console.log(student.marks)

// Add new element
student.city="Islamabad";
console.log(student);

// Delete element
delete student.marks;
console.log(student);

// For in Loop
for (key in student){
    console.log(student[key]);
}

// One element
    console.log(student.name)
    console.log(student.city)

// spread operator
let subjects={
    frontend:"html ",
    backend:"nodeJS "
}

let newData={
    ...student,
    ...subjects
}

console.log(newData);

// Nested object
const product = {
  id: "PROD-882",
  name: "Ergonomic Office Chair",
  pricing: {
    retail: 299.99,
    wholesale: 180.00,
    currency: "USD"
  },
  specs: {
    dimensions: {
      width: "65cm",
      height: "120cm"
    }
  }
};

console.log(product.specs.dimensions.height);


for(key in product.pricing){
    console.log(key, ":", product.pricing[key])
}
