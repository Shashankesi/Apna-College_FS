const student={
    name:"Shashank",
    age:22,
    course:"BE",
    marks:85,
    hobbies:["coding","gaming","traveling"]
};
student.course="MCA";// this will update the course from BE to MCA
student.hobbies.push("reading");// this will add reading to the hobbies array
student.marks="A";// this will update the marks from 85 to A
console.log(student);
 // now try to add the gender section to the student object
student.gender="male";// this will add the gender section to the student object
console.log(student);


// now for deleting the properties from the student object
delete student.age;// this will delete the age property from the student object
console.log(student);