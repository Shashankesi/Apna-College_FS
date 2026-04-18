// this keyword in javaScript
const Student={
    name:"Shashank",
    age:21,
    phy: 88,
    chem: 90,
    math: 95,
     printData(){
        console.log(this.name);
        console.log(this.age);
         let avg=(this.phy+this.chem+this.math)/3;
        console.log(avg);   
     }
}
Student.printData();