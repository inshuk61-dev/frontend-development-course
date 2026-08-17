// Use of This 
const user = {
    name:"Asad",
    id:101,
    marks:89,
 
greeting: function() {
    return `The user name is this object is ${this.name}`;
  }
}
    

const user2={
    name:"Ali",
    id:102,
    marks:93,
    greeting: function(){
        return`The name of user is ${this.name}`
    }
}

const userName= user ;
console.log(user.greeting());

const user2Name=user2;
console.log(user2.greeting());

// Shallow Copy in JS
const users = {
    name:"Asad",
    id:101,
    marks:89,

    Address:{
        city:"Islamabad",
        country:"Pakistan"

    }
}
console.log(users)

const userData=users
userData.name="Inshal";
console.log(userData)


userData.Address.country="Turkey";
console.log(userData)


// Deep Copy 
 const usersData=structuredClone(users);
usersData.Address.city="Karachi";
console.log(usersData)
console.log(users)


// Map Filter Reduce

const studentsData = [
  {
    id: 101,
    name: "Ali",
    marks: {
      math: 85,
      science: 90,
      english: 78
    }
  },
  {
    id: 102,
    name: "Sara",
    marks: {
      math: 92,
      science: 88,
      english: 95
    }
  },
  {
    id: 103,
    name: "Ahmed",
    marks: {
      math: 76,
      science: 81,
      english: 80
    }
  },
  {
    id: 104,
    name: "Ayesha",
    marks: {
      math: 89,
      science: 94,
      english: 91
    }
  },
  {
    id: 105,
    name: "Hamza",
    marks: {
      math: 70,
      science: 75,
      english: 82
    }
  }
];

const names = studentsData.map((student) => student.name);

console.log(names);


const totals = studentsData.map((student) => {
  const { math, science, english } = student.marks;

  return {
    name: student.name,
    total: math + science + english
  };
});

console.log(totals);


// Filter
const result = studentsData.filter(student => student.marks.math >= 85);

console.log(result.map(student => student.name));

// Reduce
const totalMath = studentsData.reduce((total, student) => {
  return total + student.marks.math;
}, 0);

console.log(totalMath);