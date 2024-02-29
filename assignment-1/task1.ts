// declaration of variables
//syntax   (let variable_name:type)
let a:number;
let b:string;
let c:boolean;
let d:number[];
let e:[string,number];
enum f{
    sunday,monday,tuesday,wednesday,thrusday,friday,saturday
}
//assigning values to variables
a=100;
b="Abc";
c=true;
d=[1,2,3,4,5,6]
e=["Abc",100]
//printing values
console.log("number: "+a)
console.log("string: "+b)
console.log("boolean: "+c)
console.log("Array: "+d)
console.log("tuple: "+e)
console.log("enum: ",f)

