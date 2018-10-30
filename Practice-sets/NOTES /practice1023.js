const numbers =[1,2,3,4,5];

let sum=0;
for (let i=0;i<numbers.length;i++){
    sum +=numbers [i];

}
console.log(sum);

//for each
let sum2=0;
numbers.forEach (num=>{
    sum2 +=num;
})
console.log(sum2)

//array version
//array 
let sum3= numbers.reduce ((acc,currentItem)=> { //reduce returns something
    console.log(acc);
    return acc+currentItem;
}, 0); //takes a function where you could put another parameter
                            //accumulater: the 1st parameter and does the same job as the other
//the first position of the acc is wtc is being passed in. not replacing acc as an argument
console.log('sum3',sum3)

//return a STRING that says the list of instructors
const web_instructors = ["Mo","Tak","Reed","Corey"]

const str=web_instructors.reduce ((acc,currentItem)=>{
    console.log(acc);
    return acc + currentItem + " ";
}, "The Web Instructors are ");
console.log(str);

const otherNums=[300, -5, 7, 9,-8,9,2,-2];

const negativeNums=otherNums.reduce((acc, currentItem)=>{
    if (currentItem<0){
        acc.push(currentItem);
    }
    return acc;
}, [])
console.log(negativeNums);

//Interview q: Given this matrix, how do you "flatten" it?
//[1,2,3,90,3,a,b]
const matrix=[[1,2,3], [90,3],["a","b"]];

const flattenedArray = matrix.reduce((acc,currentItem)=>{
    return acc.concat(currentItem);
},[]);
console.log(flattenedArray);

