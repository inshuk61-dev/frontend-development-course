// Question 1
const student = {
    name: "Inshal",
    age: 20,
    department: "Software Engineering",
    semester: 3
}

console.log(student)
console.log(student.name)
console.log(student.department)

// Question 2
const person = {
    name: "Ali",
    id: 101,
    address: {
        city: "Islamabad",
        country: "Pakistan"
    }
}
console.log(person)
console.log(person.address.city)

const transfer = structuredClone(person);
transfer.address.city = "Karachi";
console.log(transfer);


// Question 3
const students = {
    name: "Inshal",
    age: 20,
    subject: [
        "Javascript",
        "CSS",
        "HTML"
    ]
};
console.log(students)
console.log(students.subject[0]);

students.subject.push("React");
console.log(students.subject)


// Question 4
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2025,
    owner: {
        name: "Ali",
        city: "Peshawar"
    }

};
console.log(car.brand);
console.log(car.owner.name);

car.owner.city = "Lahore";
console.log(car)

car.color = "Black"
console.log(car)

// Question 5

const school = {
    name: "Hazara School",
    city: "Ghazi",
    students: [
        {
            name: "Inshal",
            age: 20
            ,
            marks: 97
        },
        {
            name: "Lubna",
            age: 19,
            marks: 89
        },
        {
            name: "Aiman",
            age: 18,
            marks: 75
        }

    ]
};

console.log(school);
console.log(school.students[0].name);
console.log(school.students[1].marks);

school.students[2].marks=90;
console.log(school)


// Question 6
 
const object ={
    name:"Inshal",
    age:20,
    marks:85,
    greet : function() {
        console.log("Hello my name is" + this.name);
    },

    result : function(){
        if (this.marks>=50){
            console.log("Pass")
        } 
        else{
            console.log("Fail")
        }
    }
};

object.greet();
object.result();

// Question 7

const objects = {
    name:"Inshal",
    age:20,
    marks:85,
    showInfo : function(){
        console.log("My name is " + this.name , " & my marks is " +  this.marks);
    },

     result : function(){
        if (this.marks>=50){
            console.log("Pass")
        } 
        else{
            console.log("Fail")
        }
    }
}
 
objects.showInfo();
object.result();

