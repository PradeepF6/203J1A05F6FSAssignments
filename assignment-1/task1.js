// declaration of variables
//syntax   (let variable_name:type)
var a;
var b;
var c;
var d;
var e;
var f;
(function (f) {
    f[f["sunday"] = 0] = "sunday";
    f[f["monday"] = 1] = "monday";
    f[f["tuesday"] = 2] = "tuesday";
    f[f["wednesday"] = 3] = "wednesday";
    f[f["thrusday"] = 4] = "thrusday";
    f[f["friday"] = 5] = "friday";
    f[f["saturday"] = 6] = "saturday";
})(f || (f = {}));
//assigning values to variables
a = 100;
b = "Abc";
c = true;
d = [1, 2, 3, 4, 5, 6];
e = ["Abc", 100];
//printing values
console.log("number: " + a);
console.log("string: " + b);
console.log("boolean: " + c);
console.log("Array: " + d);
console.log("tuple: " + e);
console.log("enum: ", f);
