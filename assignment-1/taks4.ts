// class Car with properties make model year
class Car{
    make:string;
    model:string;
    year:number;

    // constructor to initialize the object with values
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
     // function to display information 
     displayInfo(){
        console.log(`make is ${this.make} and the model is ${this.model} and the year is ${this.year}`)
     }
}
let x=new Car("suzuki","swift",2022)   // object creation 
x.displayInfo()    // function call