// function reverseArray that accepts an array of any type and return reversal version of it
function reverseArray<T>(a:T[]):T[]{
    return a.reverse();                    //reverse() method that reverse the array 
}
console.log(reverseArray([1,2,3,4,5,6]))      //function call
console.log(reverseArray(['a','b','c','d','e']))  // function call
console.log(reverseArray(['abc','bcd','cde','def','efg']))  // function call