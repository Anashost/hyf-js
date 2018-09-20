/// 1. Strings!
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);

console.log(myString.length);

myString = myString.replace(/,/g," ");
console.log(myString);


/// 2. Arrays!
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

favoriteAnimals.push('turtle');
console.log(favoriteAnimals);

favoriteAnimals.splice(1,0,'meerkat');
console.log("the new value in our array is :" + favoriteAnimals);
console.log(favoriteAnimals);

let animalsArrayLength = (favoriteAnimals.length);
console.log("The array has a length of: : " + animalsArrayLength );

favoriteAnimals.splice(favoriteAnimals.indexOf('giraffe') , 1);
console.log(favoriteAnimals);

console.log("The item you are looking for is at index :" + favoriteAnimals.indexOf('meerkat'));
favoriteAnimals.splice(favoriteAnimals.indexOf('meerkat') , 1);
console.log(favoriteAnimals);


///More JavaScript 🎉

//1
function threeArgument(x,y,z){
    return x + y + z ;
}
console.log(threeArgument(11,22,33)); //66


//2
function colorCar(a){
    return a ;
}
console.log('a ' + colorCar('red') + ' car');


//3
function myFunction(){
    let somePerson = {name:"Anas" , old:24 , country: "syria"};
    console.log(somePerson);
}
myFunction();

//4
function vehicleType(color,code){
    if (code == 1){
        console.log("a " + color +" car");
    }
    if (code == 2) {
        console.log("a " + color +" motorbike");
    }
}
vehicleType("blue" ,2);


//5
console.log(3 === 3 ?  "Yes" : "No");

//6
function vehicle(color, code , age){
    if (code == 1 && age==5){
        console.log("a " + color +" used car");
    } 
    if (code == 2) {
        console.log("a " + color +" motorbike");
    }
}
vehicle("blue", 1, 5);

//7
let vehicles = ["motorbike" ,"caravan" , "bike"];

//8
console.log(vehicles[2]);

//9
function vehicle(color, code , age){
    
if(code==3 && age==1 ){
console.log('a '+ color + ' new ' + vehicles[2]);
} 
}
vehicle("green", 3, 1);

//11
vehicles.splice(2,0,"buggy");

//10
let advertisement = "Amazing Joe's Garage, we service ";
for(let i=0; i < vehicles.length ;i++){
    advertisement = advertisement + "cars, " + vehicles[i] + "s, " ;
}
console.log(advertisement);

//12
let empty = {};

//13
let teachers = {
    ivana: "" ,
    unmesh: "" ,
    vincent: "" ,
    jim: ""
};

//14
teachers.ivana = "html-css" ;
teachers.unmesh = "git" ;
teachers.vincent = "git-js" ;
teachers.jim = "js" ;

//15
    let x = [1,2,3];
    let y = [1,2,3];
    let z = y;

    console.log(x == y);    //false
    console.log(x === y);   //false
    console.log(z == y);    //true
    console.log(z == x);    //false

//16
    let o1 = { foo: 'bar' };
    let o2 = { foo: 'bar' };
    let o3 = o2;

    console.log(o1);
    console.log(o2);
    console.log(o3);
    console.log(o3 = o2);
    console.log(o2 = o3);
    //// all log the same witch is object



//17
    let bar = 42;
    typeof typeof bar;
    console.log(typeof bar);           //number
    console.log(typeof typeof bar);    //string
 