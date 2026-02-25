//nested objects in JavaScript
// creating an object of objects
// storing info of multiple students in an object
const students={
    student1:{
        name:"Shashank",
        age:22,
        course:"MCA",   
        hobbies:["coding","gaming","traveling"]
    },
    student2:{
        name:"Rahul",
        age:21,
        course:"BE",
        hobbies:["sports","music","reading"]
    },  
    student3:{
        name:"Anjali",
        age:23,
        course:"MBA",
        hobbies:["dancing","cooking","painting"]
    }
};
console.log(students);

//arrays of objects in JavaScript
const courses=[
    {   
        name:"MCA",
        duration:"2 years",
        subjects:["Data Structures","Algorithms","Database Management"]
    },
    {
        name:"BE",
        duration:"4 years",
        subjects:["Computer Networks","Operating Systems","Software Engineering"]
    },
    {
        name:"MBA",
        duration:"2 years",
        subjects:["Marketing","Finance","Human Resource Management"]
    }
];
console.log(courses);