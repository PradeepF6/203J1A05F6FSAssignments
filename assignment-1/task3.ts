// interface with name Person containing fields like name,age,email
interface Person{
    name:string;
    age:number;
    email:string;
}
// function to display the data 
function display(x:Person){
    console.log(`name is ${x.name} and age is ${x.age} and email is ${x.email}`)   
}
//declaring a variable and initialize the values
let user:Person={name:"ABCD",age:30,email:"abcd143#gmail.com"} //initialize the user
display(user)