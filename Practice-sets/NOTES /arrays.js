//why arrays?
//-a set of information
//you're grouping some things in common

/*
let names=['Mo', 'Taq'];//you can leave an empty squared bracket if you want 

names.push ("John"); //push shows how it dynamicall expands as it go on

console.log (typeof names) //typeof is an object
console.log ('length of my array: ', names.length); //by being able to put a dot operator we can tell it is an object. returns 2
console.log('The first element: ', names [0]); //returns Mo
console.log ('The second Element: ', names [1]); //returns Taq
console.log ('The third Element: ', names [2]);

const firstElement = names [0];
console.log ('first letter of the first element ', (names [0])); //(names [0]) [0]); */


let numbers =[] //tells you zero
console.log ("Length Right Now: " , numbers.length);
numbers.push(5); //tells you 1 now because it has one value inside you can also put (5,2) with 2 being added it will give you 2. 
numbers.push(10); //it's like saying number.push[5,10]
console.log ("Length Right Now: ", numbers.length);
console.log (numbers);

//Pop removes the last element of the array and returns it 
numbers.pop(); //const removedElement = number.pop(); will take off the last element of 10 and store it in a variable named removedElement

numbers.pop();
numbers[0] =9;
console.log(numbers); //assigns the value of 9 to index 0, hence replacing it 
numbers.unshift (7);
console.log(numbers);
numbers.shift(); //removes an element in the beginning of the array
console.log(numbers);

//Javascript Arrays can contain different datatypes
const arr = [1,2,5,"Hello", "World", 4.5]; //6 elements, length, objects, but 5 index 
console.log(arr);

arr[10] = "omg";
console.log(arr); //gives you 1,2,5,"Hello", "World", 4.5 <4 empty items>, "omg"
arr[7]="lol";
console.log(arr);
arr.push (100); 
console.log(arr);
console.log (arr[6]); //nothing
console.log (arr.length); //



arr.push((lol)=> {
    console.log(lol);
})
console.log(arr);
arr[12] ("LOL;]"); // tells you function and LOL ;]

/*arr.push(function sayLol(lol)=> {
    console.log(lol);
})
console.log(arr);
arr[12] ("LOL;]"); */
//gives you the name of the function


//Comparing arrays
const num1 = [1,2,3,4,5];
const num2=[1,2,3,4,5];
console.log (num1===num2); // gives false because you are comparing 2 different addresses/ memory location boxes 
console.log([1,2,3]===[1,2,3]);//false 

//Slicing Arrays 
console.log(num1.slice(2,num1.length));//3,4,5
console.log(num1);

              



