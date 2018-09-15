//1
console.log("Hello world");
console.log("Halo");
console.log("Hola");
console.log("مرحيا");

//2
console.log('I\'m awesome');

//3
let x;
console.log('the value of my variable x will be: undefined');
x = 4 ;
console.log(x);
console.log('the value of x will be: 4');
console.log(x);

//4
let y = "Hello java" ;
console.log('the value of my string will be: Hello java ');
console.log(y);
let y = "10" ;
console.log('the value of my string will be: 10');
console.log(y);

//5
let z = 7.25 ;
console.log(z);
let a = Math.round(z);
console.log(a);


if(z > a) {
    let j = z ; //j is the highest value
}
else{
    z = a ;
}

console.log(j);

//6
let firstArray = [];
console.log('the value of my Array will be: undefined ');
console.log(firstArray);

let animalsArray = ["cat" , "tiger" , "falcon" ];
console.log(animalsArray);
animalsArray.push("baby pig");
console.log(animalsArray);

//7
let myString = "this is a test" ;
console.log(myString);

let myStrLength = myString.length ;
console.log(myString);

//8
let type1 = "Hello" ;
console.log(type1);

let type2 = 7.50 ;
console.log(type2);

let type3 = false ;
console.log(type3);

let type4 = ["cat" , "dog" , "hamster"];
console.log(type4);

let type5 = true ;
console.log(type5);

if (type1 === type2) {
    console.log("SAME TYPE");
} else {
    console.log("not SAME TYPE");
}
    

if (type1 === type3) {
    console.log("SAME TYPE");
} else {
    console.log("not SAME TYPE");
}

if (type1 === type4) {
    console.log("SAME TYPE");
} else {
    console.log("not SAME TYPE");
}

if (type1 === type5) {
    console.log("SAME TYPE");
} else {
    console.log("not SAME TYPE");
}

//9   // the new value of x will be 2

let c = 9 ;
let s = c % 2 ;
console.log("the value of s will be: " + s); // s = 1

let g = 53 ;
let j = g % 3 ;
console.log("the value of j will be: " + j); // j = 2


let f = 400 ;
let v = f % 4 ;
console.log("the value of v will be: " + v); // v = 0



//10
let myArray = ["string" , "another string" , 99];
console.log(myArray);

if(6/0 === 10/0){
    console.log("its comparable");
} else {
    console.log("its not comparable");
}