const students={
    name:"Inshal",
    age:20,
    marks:99
}
console.log(students)
console.log(students.name)

// Add new element
students.city="Islamabad";
console.log(students);

// Delete element
delete students.marks;
console.log(students);

// For in loop
for (key in students){
    console.log(key,":",students[key] )
}

// One element
    console.log(students.name)

// Nested Objects
const user = {
  id: 101,
  name: "Sarah Jenkins",
  contact: {
    email: "sarah@example.com",
    phone: "555-0199"
  },
  address: {
    city: "Boston",
    zip: "02108"
  }
};

console.log(user.contact.email);

for(key in user.address){
    console.log(key, user.address[key])
}


// Spread Operator 
let newData={
    ...students,
    ...user.contact
}
console.log(newData);

